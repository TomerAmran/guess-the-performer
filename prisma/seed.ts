import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🧹 Cleaning database...\n");

  // Delete in order (respecting foreign keys)
  await prisma.quizSlice.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.performance.deleteMany();
  await prisma.piece.deleteMany();
  await prisma.artist.deleteMany();
  await prisma.composer.deleteMany();

  console.log("✓ Database cleaned\n");
  console.log("🎼 Adding test data...\n");

  // Create a test user for quiz ownership
  let testUser = await prisma.user.findFirst({ where: { email: "test@example.com" } });
  if (!testUser) {
    testUser = await prisma.user.create({
      data: {
        id: "test-user-id",
        name: "Test User",
        email: "test@example.com",
      },
    });
    console.log(`✓ Created test user: ${testUser.name}`);
  } else {
    console.log(`✓ Using existing test user: ${testUser.name}`);
  }

  // Add composer
  const chopin = await prisma.composer.create({
    data: {
      name: "Frédéric Chopin",
      photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Frederic_Chopin_photo.jpeg",
    },
  });
  console.log(`✓ Composer: ${chopin.name}`);

  // Add piece
  const nocturne = await prisma.piece.create({
    data: {
      name: "Nocturne Op. 9 No. 2",
      composerId: chopin.id,
    },
  });
  console.log(`✓ Piece: ${nocturne.name}`);

  // Add 3 famous pianists
  const rubinstein = await prisma.artist.create({
    data: {
      name: "Arthur Rubinstein",
      photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Arthur_Rubinstein.jpg",
    },
  });

  const horowitz = await prisma.artist.create({
    data: {
      name: "Vladimir Horowitz",
      photoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Vladimir_Horowitz_C37292-1.jpg",
    },
  });

  const pollini = await prisma.artist.create({
    data: {
      name: "Maurizio Pollini",
      photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Maurizio_Pollini_75.jpg",
    },
  });

  console.log(`✓ Artists: ${rubinstein.name}, ${horowitz.name}, ${pollini.name}`);

  // Add 3 performances
  const perf1 = await prisma.performance.create({
    data: {
      pieceId: nocturne.id,
      artistId: rubinstein.id,
      youtubeUrl: "https://www.youtube.com/watch?v=YGRO05WcNDk",
    },
  });

  const perf2 = await prisma.performance.create({
    data: {
      pieceId: nocturne.id,
      artistId: horowitz.id,
      youtubeUrl: "https://www.youtube.com/watch?v=3QS8p5TNzFI",
    },
  });

  const perf3 = await prisma.performance.create({
    data: {
      pieceId: nocturne.id,
      artistId: pollini.id,
      youtubeUrl: "https://www.youtube.com/watch?v=S8YhDR2fOUg",
    },
  });

  console.log(`✓ Performances: 3 created`);

  // Create a quiz with 3 slices
  const quiz = await prisma.quiz.create({
    data: {
      pieceId: nocturne.id,
      createdById: testUser.id,
      duration: 30,
      slices: {
        create: [
          { performanceId: perf1.id, startTime: 0 },
          { performanceId: perf2.id, startTime: 3 },
          { performanceId: perf3.id, startTime: 0 },
        ],
      },
    },
    include: {
      piece: { include: { composer: true } },
      slices: { include: { performance: { include: { artist: true } } } },
    },
  });

  console.log(`\n✅ Chopin Quiz created!`);
  console.log(`   ID: ${quiz.id}`);
  console.log(`   Piece: ${quiz.piece.composer.name} - ${quiz.piece.name}`);
  console.log(`   Duration: ${quiz.duration}s`);
  console.log(`   Slices:`);
  quiz.slices.forEach((slice, i) => {
    console.log(`     ${i + 1}. ${slice.performance.artist.name} (start: ${slice.startTime}s)`);
  });

  // ==================== PROKOFIEV FLUTE SONATA ====================
  console.log("\n🎼 Adding Prokofiev Flute Sonata data...\n");

  // Add Prokofiev
  const prokofiev = await prisma.composer.create({
    data: {
      name: "Sergei Prokofiev",
      photoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Sergei_Prokofiev_circa_1918_over_Chair_Bain.jpg",
    },
  });
  console.log(`✓ Composer: ${prokofiev.name}`);

  // Add Flute Sonata
  const fluteSonata = await prisma.piece.create({
    data: {
      name: "Flute Sonata in D major, Op. 94",
      composerId: prokofiev.id,
    },
  });
  console.log(`✓ Piece: ${fluteSonata.name}`);

  // Add 3 famous flutists
  const galway = await prisma.artist.create({
    data: {
      name: "James Galway",
      photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/James_Galway_2015.jpg",
    },
  });

  const rampal = await prisma.artist.create({
    data: {
      name: "Jean-Pierre Rampal",
      photoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Jean-Pierre_Rampal.jpg",
    },
  });

  const pahud = await prisma.artist.create({
    data: {
      name: "Emmanuel Pahud",
      photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/db/Emmanuel_Pahud.jpg",
    },
  });

  console.log(`✓ Artists: ${galway.name}, ${rampal.name}, ${pahud.name}`);

  // Add 3 flute performances
  const flutePerf1 = await prisma.performance.create({
    data: {
      pieceId: fluteSonata.id,
      artistId: galway.id,
      youtubeUrl: "https://www.youtube.com/watch?v=hfJ9-HenydQ",
    },
  });

  const flutePerf2 = await prisma.performance.create({
    data: {
      pieceId: fluteSonata.id,
      artistId: rampal.id,
      youtubeUrl: "https://www.youtube.com/watch?v=qE5EBXceh24",
    },
  });

  const flutePerf3 = await prisma.performance.create({
    data: {
      pieceId: fluteSonata.id,
      artistId: pahud.id,
      youtubeUrl: "https://www.youtube.com/watch?v=e1EX51ctiyI",
    },
  });

  console.log(`✓ Performances: 3 created`);

  // Create Prokofiev quiz
  const prokofievQuiz = await prisma.quiz.create({
    data: {
      pieceId: fluteSonata.id,
      createdById: testUser.id,
      duration: 30,
      slices: {
        create: [
          { performanceId: flutePerf1.id, startTime: 0 },  // Galway
          { performanceId: flutePerf2.id, startTime: 5 },  // Rampal
          { performanceId: flutePerf3.id, startTime: 0 },  // Pahud
        ],
      },
    },
    include: {
      piece: { include: { composer: true } },
      slices: { include: { performance: { include: { artist: true } } } },
    },
  });

  console.log(`\n✅ Prokofiev Quiz created!`);
  console.log(`   ID: ${prokofievQuiz.id}`);
  console.log(`   Piece: ${prokofievQuiz.piece.composer.name} - ${prokofievQuiz.piece.name}`);
  console.log(`   Duration: ${prokofievQuiz.duration}s`);
  console.log(`   Slices:`);
  prokofievQuiz.slices.forEach((slice, i) => {
    console.log(`     ${i + 1}. ${slice.performance.artist.name} (start: ${slice.startTime}s)`);
  });
}

main()
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
