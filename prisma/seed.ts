import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🧹 Cleaning database...\n");

  // Delete in order (respecting foreign keys)
  await prisma.quizSlice.deleteMany();
  await prisma.quiz.deleteMany();
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

  // ==================== CHOPIN NOCTURNE ====================

  // Add composer
  const chopin = await prisma.composer.create({
    data: {
      name: "Frédéric Chopin",
      photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Frederic_Chopin_photo.jpeg",
    },
  });
  console.log(`✓ Composer: ${chopin.name}`);

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

  // Create Chopin quiz with inline slices
  const chopinQuiz = await prisma.quiz.create({
    data: {
      composerId: chopin.id,
      pieceName: "Nocturne Op. 9 No. 2",
      createdById: testUser.id,
      duration: 30,
      slices: {
        create: [
          {
            artistId: rubinstein.id,
            youtubeUrl: "https://www.youtube.com/watch?v=YGRO05WcNDk",
            startTime: 0
          },
          {
            artistId: horowitz.id,
            youtubeUrl: "https://www.youtube.com/watch?v=3QS8p5TNzFI",
            startTime: 3
          },
          {
            artistId: pollini.id,
            youtubeUrl: "https://www.youtube.com/watch?v=S8YhDR2fOUg",
            startTime: 0
          },
        ],
      },
    },
    include: {
      composer: true,
      slices: { include: { artist: true } },
    },
  });

  console.log(`\n✅ Chopin Quiz created!`);
  console.log(`   ID: ${chopinQuiz.id}`);
  console.log(`   Piece: ${chopinQuiz.composer.name} - ${chopinQuiz.pieceName}`);
  console.log(`   Duration: ${chopinQuiz.duration}s`);
  console.log(`   Slices:`);
  chopinQuiz.slices.forEach((slice, i) => {
    console.log(`     ${i + 1}. ${slice.artist.name} (start: ${slice.startTime}s)`);
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

  // Add 3 famous flutists
  const galway = await prisma.artist.create({
    data: {
      name: "James Galway",
      photoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7f/JamesGalway.jpg",
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
      photoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/76/Jean_Pierre_Rampal.jpg",
    },
  });

  console.log(`✓ Artists: ${galway.name}, ${rampal.name}, ${pahud.name}`);

  // Create Prokofiev quiz with inline slices
  const prokofievQuiz = await prisma.quiz.create({
    data: {
      composerId: prokofiev.id,
      pieceName: "Flute Sonata in D major, Op. 94",
      createdById: testUser.id,
      duration: 30,
      slices: {
        create: [
          {
            artistId: galway.id,
            youtubeUrl: "https://www.youtube.com/watch?v=hfJ9-HenydQ",
            startTime: 2
          },
          {
            artistId: rampal.id,
            youtubeUrl: "https://www.youtube.com/watch?v=qE5EBXceh24",
            startTime: 5
          },
          {
            artistId: pahud.id,
            youtubeUrl: "https://www.youtube.com/watch?v=e1EX51ctiyI",
            startTime: 0
          },
        ],
      },
    },
    include: {
      composer: true,
      slices: { include: { artist: true } },
    },
  });

  console.log(`\n✅ Prokofiev Quiz created!`);
  console.log(`   ID: ${prokofievQuiz.id}`);
  console.log(`   Piece: ${prokofievQuiz.composer.name} - ${prokofievQuiz.pieceName}`);
  console.log(`   Duration: ${prokofievQuiz.duration}s`);
  console.log(`   Slices:`);
  prokofievQuiz.slices.forEach((slice, i) => {
    console.log(`     ${i + 1}. ${slice.artist.name} (start: ${slice.startTime}s)`);
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
