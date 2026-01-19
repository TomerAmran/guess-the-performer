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

  // Add one composer
  console.log("🎼 Adding test data...\n");

  const chopin = await prisma.composer.create({
    data: {
      name: "Frédéric Chopin",
      photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Frederic_Chopin_photo.jpeg",
    },
  });
  console.log(`✓ Composer: ${chopin.name}`);

  // Add one piece
  const nocturne = await prisma.piece.create({
    data: {
      name: "Nocturne Op. 9 No. 2",
      composerId: chopin.id,
    },
  });
  console.log(`✓ Piece: ${nocturne.name}`);

  // Add 3 famous pianists
  const artists = await Promise.all([
    prisma.artist.create({
      data: {
        name: "Arthur Rubinstein",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Arthur_Rubinstein_%281963%29.jpg",
      },
    }),
    prisma.artist.create({
      data: {
        name: "Vladimir Horowitz",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/Vladimir_Horowitz_NYWTS.jpg",
      },
    }),
    prisma.artist.create({
      data: {
        name: "Martha Argerich",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Martha_Argerich.jpg",
      },
    }),
  ]);
  console.log(`✓ Artists: ${artists.map((a) => a.name).join(", ")}`);

  // Add 3 performances (different YouTube recordings of the same piece)
  const performances = await Promise.all([
    prisma.performance.create({
      data: {
        pieceId: nocturne.id,
        artistId: artists[0]!.id,
        youtubeUrl: "https://www.youtube.com/watch?v=9E6b3swbnWg", // Rubinstein
      },
    }),
    prisma.performance.create({
      data: {
        pieceId: nocturne.id,
        artistId: artists[1]!.id,
        youtubeUrl: "https://www.youtube.com/watch?v=YGRO05WcNDk", // Horowitz
      },
    }),
    prisma.performance.create({
      data: {
        pieceId: nocturne.id,
        artistId: artists[2]!.id,
        youtubeUrl: "https://www.youtube.com/watch?v=ZtIW2r1EalM", // Argerich
      },
    }),
  ]);
  console.log(`✓ Performances: ${performances.length} added\n`);

  console.log("✅ Done! Test data ready:");
  console.log("   - 1 Composer (Chopin)");
  console.log("   - 1 Piece (Nocturne Op. 9 No. 2)");
  console.log("   - 3 Artists (Rubinstein, Horowitz, Argerich)");
  console.log("   - 3 Performances (one per artist)");
}

main()
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
