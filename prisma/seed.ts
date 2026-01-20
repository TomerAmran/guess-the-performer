import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🧹 Cleaning database...\n");

  // Delete in order (respecting foreign keys)
  await prisma.quizSlice.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.artist.deleteMany();
  await prisma.composer.deleteMany();
  await prisma.instrument.deleteMany();

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

  // ==================== INSTRUMENTS ====================
  console.log("\n🎹 Adding classical instruments...\n");

  const piano = await prisma.instrument.create({ data: { name: "Piano" } });
  const violin = await prisma.instrument.create({ data: { name: "Violin" } });
  const cello = await prisma.instrument.create({ data: { name: "Cello" } });
  const flute = await prisma.instrument.create({ data: { name: "Flute" } });
  const clarinet = await prisma.instrument.create({ data: { name: "Clarinet" } });
  const oboe = await prisma.instrument.create({ data: { name: "Oboe" } });
  const trumpet = await prisma.instrument.create({ data: { name: "Trumpet" } });
  const horn = await prisma.instrument.create({ data: { name: "French Horn" } });
  const trombone = await prisma.instrument.create({ data: { name: "Trombone" } });
  const guitar = await prisma.instrument.create({ data: { name: "Guitar" } });
  const harp = await prisma.instrument.create({ data: { name: "Harp" } });
  const viola = await prisma.instrument.create({ data: { name: "Viola" } });
  const bassoon = await prisma.instrument.create({ data: { name: "Bassoon" } });
  const saxophone = await prisma.instrument.create({ data: { name: "Saxophone" } });

  console.log("✓ Created 14 classical instruments");

  // ==================== COMPOSERS ====================
  console.log("\n🎼 Adding famous composers...\n");

  const composers = await prisma.composer.createManyAndReturn({
    data: [
      // Baroque Era (1600-1750)
      { name: "Johann Sebastian Bach", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Johann_Sebastian_Bach.jpg/220px-Johann_Sebastian_Bach.jpg" },
      { name: "George Frideric Handel", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/George_Frideric_Handel_by_Balthasar_Denner.jpg/220px-George_Frideric_Handel_by_Balthasar_Denner.jpg" },
      { name: "Antonio Vivaldi", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Vivaldi.jpg/220px-Vivaldi.jpg" },
      { name: "Claudio Monteverdi", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Claudio_Monteverdi%2C_portrait_by_Bernardo_Strozzi_%28c._1630%29.jpg/220px-Claudio_Monteverdi%2C_portrait_by_Bernardo_Strozzi_%28c._1630%29.jpg" },
      { name: "Henry Purcell", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Henry_Purcell_by_John_Closterman.jpg/220px-Henry_Purcell_by_John_Closterman.jpg" },
      { name: "Domenico Scarlatti", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Domenico_Scarlatti.jpg/220px-Domenico_Scarlatti.jpg" },
      { name: "Jean-Philippe Rameau", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Jean-Philippe_Rameau_by_Jacques_Aved_-_Dijon.jpg/220px-Jean-Philippe_Rameau_by_Jacques_Aved_-_Dijon.jpg" },
      { name: "Georg Philipp Telemann", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Georg_Philipp_Telemann_by_Georg_Lichtensteger.jpg/220px-Georg_Philipp_Telemann_by_Georg_Lichtensteger.jpg" },
      
      // Classical Era (1750-1820)
      { name: "Wolfgang Amadeus Mozart", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wolfgang-amadeus-mozart_1.jpg/220px-Wolfgang-amadeus-mozart_1.jpg" },
      { name: "Joseph Haydn", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Joseph_Haydn%2C_painting_by_Thomas_Hardy%2C_1792.jpg/220px-Joseph_Haydn%2C_painting_by_Thomas_Hardy%2C_1792.jpg" },
      { name: "Ludwig van Beethoven", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/220px-Beethoven.jpg" },
      { name: "Christoph Willibald Gluck", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Christoph_Willibald_Gluck_painted_by_Joseph_Duplessis.jpg/220px-Christoph_Willibald_Gluck_painted_by_Joseph_Duplessis.jpg" },
      
      // Romantic Era (1820-1900)
      { name: "Frédéric Chopin", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Frederic_Chopin_photo.jpeg/220px-Frederic_Chopin_photo.jpeg" },
      { name: "Franz Schubert", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Franz_Schubert_by_Wilhelm_August_Rieder_1875.jpg/220px-Franz_Schubert_by_Wilhelm_August_Rieder_1875.jpg" },
      { name: "Robert Schumann", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Robert_Schumann_1839.jpg/220px-Robert_Schumann_1839.jpg" },
      { name: "Franz Liszt", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Franz_Liszt_1858.jpg/220px-Franz_Liszt_1858.jpg" },
      { name: "Johannes Brahms", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Brahms_-_1889.jpg/220px-Brahms_-_1889.jpg" },
      { name: "Pyotr Ilyich Tchaikovsky", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Tchaikovsky_by_Reutlinger_%28cropped%29.jpg/220px-Tchaikovsky_by_Reutlinger_%28cropped%29.jpg" },
      { name: "Felix Mendelssohn", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Felix_Mendelssohn_Bartholdy.jpg/220px-Felix_Mendelssohn_Bartholdy.jpg" },
      { name: "Antonín Dvořák", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Dvorak.jpg/220px-Dvorak.jpg" },
      { name: "Edvard Grieg", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Edvard_Grieg_%281888%29_by_Elliot_and_Fry_-_02.jpg/220px-Edvard_Grieg_%281888%29_by_Elliot_and_Fry_-_02.jpg" },
      { name: "Giuseppe Verdi", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Verdi.jpg/220px-Verdi.jpg" },
      { name: "Richard Wagner", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/RichardWagner.jpg/220px-RichardWagner.jpg" },
      { name: "Giacomo Puccini", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/GiacomoPuccini.jpg/220px-GiacomoPuccini.jpg" },
      { name: "Hector Berlioz", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Hector_Berlioz_1857.png/220px-Hector_Berlioz_1857.png" },
      { name: "Niccolò Paganini", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Niccolo_Paganini01.jpg/220px-Niccolo_Paganini01.jpg" },
      { name: "Camille Saint-Saëns", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Camille_Saint-Sa%C3%ABns_by_Napoleon_Sarony_%28ca._1890s%29.jpg/220px-Camille_Saint-Sa%C3%ABns_by_Napoleon_Sarony_%28ca._1890s%29.jpg" },
      { name: "César Franck", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/C%C3%A9sar_Franck_2.jpg/220px-C%C3%A9sar_Franck_2.jpg" },
      { name: "Gabriel Fauré", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gabriel_Faur%C3%A9_by_Pierre_Petit.jpg/220px-Gabriel_Faur%C3%A9_by_Pierre_Petit.jpg" },
      { name: "Anton Bruckner", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Anton_bruckner.jpg/220px-Anton_bruckner.jpg" },
      { name: "Gustav Mahler", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Gustav_Mahler_1909.jpg/220px-Gustav_Mahler_1909.jpg" },
      
      // Late Romantic / Early Modern (1880-1950)
      { name: "Claude Debussy", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Claude_Debussy_ca_1908%2C_foto_av_F%C3%A9lix_Nadar.jpg/220px-Claude_Debussy_ca_1908%2C_foto_av_F%C3%A9lix_Nadar.jpg" },
      { name: "Maurice Ravel", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Maurice_Ravel_1912.jpg/220px-Maurice_Ravel_1912.jpg" },
      { name: "Sergei Rachmaninoff", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sergei_Rachmaninoff_cph.3a40575.jpg/220px-Sergei_Rachmaninoff_cph.3a40575.jpg" },
      { name: "Sergei Prokofiev", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sergei_Prokofiev_circa_1918_over_Chair_Bain.jpg/220px-Sergei_Prokofiev_circa_1918_over_Chair_Bain.jpg" },
      { name: "Igor Stravinsky", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Igor_Stravinsky_LOC_32392u.jpg/220px-Igor_Stravinsky_LOC_32392u.jpg" },
      { name: "Dmitri Shostakovich", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Dmitri_Shostakovich_credit_Deutsche_Fotothek_adjusted.jpg/220px-Dmitri_Shostakovich_credit_Deutsche_Fotothek_adjusted.jpg" },
      { name: "Béla Bartók", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Bela_Bartok_1927.jpg/220px-Bela_Bartok_1927.jpg" },
      { name: "Jean Sibelius", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jean_Sibelius%2C_1913.jpg/220px-Jean_Sibelius%2C_1913.jpg" },
      { name: "Richard Strauss", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Strauss-1918.jpg/220px-Strauss-1918.jpg" },
      { name: "Arnold Schoenberg", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Arnold_Schoenberg_la_1948.jpg/220px-Arnold_Schoenberg_la_1948.jpg" },
      { name: "Erik Satie", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Erik_Satie_%281919%29_by_Man_Ray.jpg/220px-Erik_Satie_%281919%29_by_Man_Ray.jpg" },
      
      // 20th Century
      { name: "George Gershwin", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/George_Gershwin_1937.jpg/220px-George_Gershwin_1937.jpg" },
      { name: "Aaron Copland", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Aaron_Copland_1970.jpg/220px-Aaron_Copland_1970.jpg" },
      { name: "Leonard Bernstein", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Leonard_Bernstein_by_Jack_Mitchell.jpg/220px-Leonard_Bernstein_by_Jack_Mitchell.jpg" },
      { name: "Benjamin Britten", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Benjamin_Britten%2C_London_Records_1968_publicity_photo_for_Wikipedia.jpg/220px-Benjamin_Britten%2C_London_Records_1968_publicity_photo_for_Wikipedia.jpg" },
      { name: "Olivier Messiaen", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Olivier_Messiaen_1986_%28cropped%29.jpg/220px-Olivier_Messiaen_1986_%28cropped%29.jpg" },
      { name: "Philip Glass", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Philip_Glass_in_Florence%2C_Italy_-_1993.jpg/220px-Philip_Glass_in_Florence%2C_Italy_-_1993.jpg" },
    ],
  });

  console.log(`✓ Created ${composers.length} famous composers`);

  // Get references to specific composers for quizzes
  const chopin = composers.find(c => c.name === "Frédéric Chopin")!;
  const prokofiev = composers.find(c => c.name === "Sergei Prokofiev")!;


  // ==================== CHOPIN NOCTURNE ====================
  console.log("\n🎼 Adding Chopin Nocturne data...\n");
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
      instrumentId: piano.id,
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
      instrument: true,
      slices: { include: { artist: true } },
    },
  });

  console.log(`\n✅ Chopin Quiz created!`);
  console.log(`   ID: ${chopinQuiz.id}`);
  console.log(`   Piece: ${chopinQuiz.composer.name} - ${chopinQuiz.pieceName}`);
  console.log(`   Instrument: ${chopinQuiz.instrument.name}`);
  console.log(`   Duration: ${chopinQuiz.duration}s`);
  console.log(`   Slices:`);
  chopinQuiz.slices.forEach((slice, i) => {
    console.log(`     ${i + 1}. ${slice.artist.name} (start: ${slice.startTime}s)`);
  });

  // ==================== PROKOFIEV FLUTE SONATA ====================
  console.log("\n🎼 Adding Prokofiev Flute Sonata data...\n");
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
      instrumentId: flute.id,
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
      instrument: true,
      slices: { include: { artist: true } },
    },
  });

  console.log(`\n✅ Prokofiev Quiz created!`);
  console.log(`   ID: ${prokofievQuiz.id}`);
  console.log(`   Piece: ${prokofievQuiz.composer.name} - ${prokofievQuiz.pieceName}`);
  console.log(`   Instrument: ${prokofievQuiz.instrument.name}`);
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
