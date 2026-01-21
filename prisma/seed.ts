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

  // Create/find admin user for quiz ownership
  let adminUser = await prisma.user.findFirst({ where: { email: "tomerflute@gmail.com" } });
  if (!adminUser) {
    adminUser = await prisma.user.create({
      data: {
        id: "admin-user-id",
        name: "Tomer",
        email: "tomerflute@gmail.com",
      },
    });
    console.log(`✓ Created admin user: ${adminUser.name}`);
  } else {
    console.log(`✓ Using existing admin user: ${adminUser.name}`);
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
      { name: "Johann Sebastian Bach", photoUrl: "/composers/bach.jpg" },
      { name: "George Frideric Handel", photoUrl: "/composers/handel.jpg" },
      { name: "Antonio Vivaldi", photoUrl: "/composers/vivaldi.jpg" },
      { name: "Claudio Monteverdi", photoUrl: "/composers/monteverdi.jpg" },
      { name: "Henry Purcell", photoUrl: "/composers/purcell.jpg" },
      { name: "Domenico Scarlatti", photoUrl: null },
      { name: "Jean-Philippe Rameau", photoUrl: "/composers/rameau.jpg" },
      { name: "Georg Philipp Telemann", photoUrl: "/composers/telemann.jpg" },
      
      // Classical Era (1750-1820)
      { name: "Wolfgang Amadeus Mozart", photoUrl: "/composers/mozart.jpg" },
      { name: "Joseph Haydn", photoUrl: "/composers/haydn.jpg" },
      { name: "Ludwig van Beethoven", photoUrl: "/composers/beethoven.jpg" },
      { name: "Christoph Willibald Gluck", photoUrl: "/composers/gluck.jpg" },
      
      // Romantic Era (1820-1900)
      { name: "Frédéric Chopin", photoUrl: "/composers/chopin.jpg" },
      { name: "Franz Schubert", photoUrl: "/composers/schubert.jpg" },
      { name: "Robert Schumann", photoUrl: "/composers/schumann.jpg" },
      { name: "Franz Liszt", photoUrl: "/composers/liszt.jpg" },
      { name: "Johannes Brahms", photoUrl: "/composers/brahms.jpg" },
      { name: "Pyotr Ilyich Tchaikovsky", photoUrl: "/composers/tchaikovsky.jpg" },
      { name: "Felix Mendelssohn", photoUrl: "/composers/mendelssohn.jpg" },
      { name: "Antonín Dvořák", photoUrl: "/composers/dvorak.jpg" },
      { name: "Edvard Grieg", photoUrl: "/composers/grieg.jpg" },
      { name: "Giuseppe Verdi", photoUrl: "/composers/verdi.jpg" },
      { name: "Richard Wagner", photoUrl: "/composers/wagner.jpg" },
      { name: "Giacomo Puccini", photoUrl: "/composers/puccini.jpg" },
      { name: "Hector Berlioz", photoUrl: "/composers/berlioz.jpg" },
      { name: "Niccolò Paganini", photoUrl: "/composers/paganini.jpg" },
      { name: "Camille Saint-Saëns", photoUrl: "/composers/saint-saens.jpg" },
      { name: "César Franck", photoUrl: "/composers/franck.jpg" },
      { name: "Gabriel Fauré", photoUrl: null },
      { name: "Anton Bruckner", photoUrl: "/composers/bruckner.jpg" },
      { name: "Gustav Mahler", photoUrl: "/composers/mahler.jpg" },
      
      // Late Romantic / Early Modern (1880-1950)
      { name: "Claude Debussy", photoUrl: "/composers/debussy.jpg" },
      { name: "Maurice Ravel", photoUrl: "/composers/ravel.jpg" },
      { name: "Sergei Rachmaninoff", photoUrl: "/composers/rachmaninoff.jpg" },
      { name: "Sergei Prokofiev", photoUrl: "/composers/prokofiev.jpg" },
      { name: "Igor Stravinsky", photoUrl: "/composers/stravinsky.jpg" },
      { name: "Dmitri Shostakovich", photoUrl: "/composers/shostakovich.jpg" },
      { name: "Béla Bartók", photoUrl: "/composers/bartok.jpg" },
      { name: "Jean Sibelius", photoUrl: "/composers/sibelius.jpg" },
      { name: "Richard Strauss", photoUrl: "/composers/strauss-r.jpg" },
      { name: "Arnold Schoenberg", photoUrl: "/composers/schoenberg.jpg" },
      { name: "Erik Satie", photoUrl: null },
      
      // 20th Century
      { name: "George Gershwin", photoUrl: "/composers/gershwin.jpg" },
      { name: "Aaron Copland", photoUrl: null },
      { name: "Leonard Bernstein", photoUrl: "/composers/bernstein.jpg" },
      { name: "Benjamin Britten", photoUrl: "/composers/britten.jpg" },
      { name: "Olivier Messiaen", photoUrl: "/composers/messiaen.jpg" },
      { name: "Philip Glass", photoUrl: "/composers/glass.jpg" },
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
      photoUrl: "/artists/rubinstein.jpg",
    },
  });

  const horowitz = await prisma.artist.create({
    data: {
      name: "Vladimir Horowitz",
      photoUrl: "/artists/horowitz.jpg",
    },
  });

  const pollini = await prisma.artist.create({
    data: {
      name: "Maurizio Pollini",
      photoUrl: "/artists/pollini.jpg",
    },
  });

  console.log(`✓ Artists: ${rubinstein.name}, ${horowitz.name}, ${pollini.name}`);

  // Create Chopin quiz with inline slices
  const chopinQuiz = await prisma.quiz.create({
    data: {
      composerId: chopin.id,
      instrumentId: piano.id,
      pieceName: "Nocturne Op. 9 No. 2",
      createdById: adminUser.id,
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
      photoUrl: "/artists/galway.jpg",
    },
  });

  const rampal = await prisma.artist.create({
    data: {
      name: "Jean-Pierre Rampal",
      photoUrl: "/artists/rampal.jpg",
    },
  });

  const pahud = await prisma.artist.create({
    data: {
      name: "Emmanuel Pahud",
      photoUrl: null, // Photo not available
    },
  });

  console.log(`✓ Artists: ${galway.name}, ${rampal.name}, ${pahud.name}`);

  // Create Prokofiev quiz with inline slices
  const prokofievQuiz = await prisma.quiz.create({
    data: {
      composerId: prokofiev.id,
      instrumentId: flute.id,
      pieceName: "Flute Sonata in D major, Op. 94",
      createdById: adminUser.id,
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

  // ==================== MENDELSSOHN VIOLIN CONCERTO ====================
  const mendelssohn = composers.find(c => c.name === "Felix Mendelssohn")!;
  console.log("\n🎼 Adding Mendelssohn Violin Concerto data...\n");
  
  const hilaryHahn = await prisma.artist.create({
    data: { name: "Hilary Hahn", photoUrl: "/artists/hilary-hahn.jpg" },
  });
  const rayChen = await prisma.artist.create({
    data: { name: "Ray Chen", photoUrl: null }, // Photo not available
  });
  const janineJansen = await prisma.artist.create({
    data: { name: "Janine Jansen", photoUrl: "/artists/janine-jansen.jpg" },
  });

  const mendelssohnQuiz = await prisma.quiz.create({
    data: {
      composerId: mendelssohn.id,
      instrumentId: violin.id,
      pieceName: "Violin Concerto in E minor, Op. 64",
      createdById: adminUser.id,
      duration: 30,
      slices: {
        create: [
          { artistId: hilaryHahn.id, youtubeUrl: "https://www.youtube.com/watch?v=SDwKJ6bBXEA&t=40s", startTime: 33 },
          { artistId: rayChen.id, youtubeUrl: "https://www.youtube.com/watch?v=I03Hs6dwj7E", startTime: 22 },
          { artistId: janineJansen.id, youtubeUrl: "https://www.youtube.com/watch?v=Pmj7nCRYNs4", startTime: 35 },
        ],
      },
    },
    include: { composer: true, instrument: true, slices: { include: { artist: true } } },
  });
  console.log(`✅ Mendelssohn Quiz created: ${mendelssohnQuiz.pieceName}`);

  // ==================== BACH CELLO SUITE NO. 1 PRELUDE ====================
  const bach = composers.find(c => c.name === "Johann Sebastian Bach")!;
  console.log("\n🎼 Adding Bach Cello Suite No. 1 Prelude data...\n");
  
  const yoyoMa = await prisma.artist.create({
    data: { name: "Yo-Yo Ma", photoUrl: "/artists/yo-yo-ma.jpg" },
  });
  const mischaMaisky = await prisma.artist.create({
    data: { name: "Mischa Maisky", photoUrl: "/artists/maisky.jpg" },
  });
  const jacquelineDuPre = await prisma.artist.create({
    data: { name: "Jacqueline du Pré", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Jaqueline_dupre_wedding_portrait.jpg/960px-Jaqueline_dupre_wedding_portrait.jpg" },
  });

  const bachQuiz = await prisma.quiz.create({
    data: {
      composerId: bach.id,
      instrumentId: cello.id,
      pieceName: "Cello Suite No. 1 in G major, BWV 1007 - Prelude",
      createdById: adminUser.id,
      duration: 30,
      slices: {
        create: [
          { artistId: yoyoMa.id, youtubeUrl: "https://www.youtube.com/watch?v=1prweT95Mo0", startTime: 9 },
          { artistId: mischaMaisky.id, youtubeUrl: "https://www.youtube.com/watch?v=mGQLXRTl3Z0", startTime: 10 },
          { artistId: jacquelineDuPre.id, youtubeUrl: "https://www.youtube.com/watch?v=EKIXiNDsMgk", startTime: 1 },
        ],
      },
    },
    include: { composer: true, instrument: true, slices: { include: { artist: true } } },
  });
  console.log(`✅ Bach Quiz created: ${bachQuiz.pieceName}`);

  // ==================== TCHAIKOVSKY VIOLIN CONCERTO ====================
  const tchaikovsky = composers.find(c => c.name === "Pyotr Ilyich Tchaikovsky")!;
  console.log("\n🎼 Adding Tchaikovsky Violin Concerto data...\n");
  
  const maximVengerov = await prisma.artist.create({
    data: { name: "Maxim Vengerov", photoUrl: null }, // Photo not available
  });
  const joshuaBell = await prisma.artist.create({
    data: { name: "Joshua Bell", photoUrl: "/artists/joshua-bell.jpg" },
  });
  const lisaBatiashvili = await prisma.artist.create({
    data: { name: "Lisa Batiashvili", photoUrl: "/artists/batiashvili.jpg" },
  });

  const tchaikovskyQuiz = await prisma.quiz.create({
    data: {
      composerId: tchaikovsky.id,
      instrumentId: violin.id,
      pieceName: "Violin Concerto in D major, Op. 35",
      createdById: adminUser.id,
      duration: 30,
      slices: {
        create: [
          { artistId: maximVengerov.id, youtubeUrl: "https://www.youtube.com/watch?v=kVPwmKVC3_I&t=51s", startTime: 45 },
          { artistId: joshuaBell.id, youtubeUrl: "https://www.youtube.com/watch?v=cbJZeNlrYKg", startTime: 51 },
          { artistId: lisaBatiashvili.id, youtubeUrl: "https://www.youtube.com/watch?v=Pjo7xkoStes", startTime: 52 },
        ],
      },
    },
    include: { composer: true, instrument: true, slices: { include: { artist: true } } },
  });
  console.log(`✅ Tchaikovsky Quiz created: ${tchaikovskyQuiz.pieceName}`);

  // ==================== BEETHOVEN MOONLIGHT SONATA ====================
  const beethoven = composers.find(c => c.name === "Ludwig van Beethoven")!;
  console.log("\n🎼 Adding Beethoven Moonlight Sonata data...\n");
  
  const barenboim = await prisma.artist.create({
    data: { name: "Daniel Barenboim", photoUrl: null },
  });

  const moonlightQuiz = await prisma.quiz.create({
    data: {
      composerId: beethoven.id,
      instrumentId: piano.id,
      pieceName: "Piano Sonata No. 14 'Moonlight'",
      createdById: adminUser.id,
      duration: 30,
      slices: {
        create: [
          { artistId: rubinstein.id, youtubeUrl: "https://www.youtube.com/watch?v=KVRI5Ud9Re4", startTime: 0 },
          { artistId: horowitz.id, youtubeUrl: "https://www.youtube.com/watch?v=shMmbJBcW5A", startTime: 0 },
          { artistId: barenboim.id, youtubeUrl: "https://www.youtube.com/watch?v=q5OaSju0qNc", startTime: 0 },
        ],
      },
    },
    include: { composer: true, instrument: true, slices: { include: { artist: true } } },
  });
  console.log(`✅ Beethoven Quiz created: ${moonlightQuiz.pieceName}`);

  // ==================== RACHMANINOFF PIANO CONCERTO NO. 3 ====================
  const rachmaninoff = composers.find(c => c.name === "Sergei Rachmaninoff")!;
  console.log("\n🎼 Adding Rachmaninoff Piano Concerto No. 3 data...\n");
  
  const argerich = await prisma.artist.create({
    data: { name: "Martha Argerich", photoUrl: null },
  });
  const trifonov = await prisma.artist.create({
    data: { name: "Daniil Trifonov", photoUrl: null },
  });

  const rachmaninoffQuiz = await prisma.quiz.create({
    data: {
      composerId: rachmaninoff.id,
      instrumentId: piano.id,
      pieceName: "Piano Concerto No. 3 in D minor, Op. 30",
      createdById: adminUser.id,
      duration: 30,
      slices: {
        create: [
          { artistId: horowitz.id, youtubeUrl: "https://www.youtube.com/watch?v=D5mxU_7BTRA", startTime: 60 },
          { artistId: argerich.id, youtubeUrl: "https://www.youtube.com/watch?v=MOOfoW5_2iE", startTime: 60 },
          { artistId: trifonov.id, youtubeUrl: "https://www.youtube.com/watch?v=bO-6-ZjlKvw", startTime: 60 },
        ],
      },
    },
    include: { composer: true, instrument: true, slices: { include: { artist: true } } },
  });
  console.log(`✅ Rachmaninoff Quiz created: ${rachmaninoffQuiz.pieceName}`);

  // ==================== BRAHMS VIOLIN CONCERTO ====================
  const brahms = composers.find(c => c.name === "Johannes Brahms")!;
  console.log("\n🎼 Adding Brahms Violin Concerto data...\n");
  
  const heifetz = await prisma.artist.create({
    data: { name: "Jascha Heifetz", photoUrl: null },
  });
  const oistrakh = await prisma.artist.create({
    data: { name: "David Oistrakh", photoUrl: null },
  });
  const mutter = await prisma.artist.create({
    data: { name: "Anne-Sophie Mutter", photoUrl: null },
  });

  const brahmsQuiz = await prisma.quiz.create({
    data: {
      composerId: brahms.id,
      instrumentId: violin.id,
      pieceName: "Violin Concerto in D major, Op. 77",
      createdById: adminUser.id,
      duration: 30,
      slices: {
        create: [
          { artistId: heifetz.id, youtubeUrl: "https://www.youtube.com/watch?v=7iG9tUJ7Am4", startTime: 120 },
          { artistId: oistrakh.id, youtubeUrl: "https://www.youtube.com/watch?v=RFkSiNp4CRQ", startTime: 120 },
          { artistId: mutter.id, youtubeUrl: "https://www.youtube.com/watch?v=HRkOqnj7YkQ", startTime: 120 },
        ],
      },
    },
    include: { composer: true, instrument: true, slices: { include: { artist: true } } },
  });
  console.log(`✅ Brahms Quiz created: ${brahmsQuiz.pieceName}`);

  // ==================== SIBELIUS VIOLIN CONCERTO ====================
  const sibelius = composers.find(c => c.name === "Jean Sibelius")!;
  console.log("\n🎼 Adding Sibelius Violin Concerto data...\n");

  const sibeliusQuiz = await prisma.quiz.create({
    data: {
      composerId: sibelius.id,
      instrumentId: violin.id,
      pieceName: "Violin Concerto in D minor, Op. 47",
      createdById: adminUser.id,
      duration: 30,
      slices: {
        create: [
          { artistId: heifetz.id, youtubeUrl: "https://www.youtube.com/watch?v=-yvy9lS5DC4", startTime: 60 },
          { artistId: hilaryHahn.id, youtubeUrl: "https://www.youtube.com/watch?v=J0w0t4Qn6LY", startTime: 60 },
          { artistId: janineJansen.id, youtubeUrl: "https://www.youtube.com/watch?v=iIafobNq-tU", startTime: 60 },
        ],
      },
    },
    include: { composer: true, instrument: true, slices: { include: { artist: true } } },
  });
  console.log(`✅ Sibelius Quiz created: ${sibeliusQuiz.pieceName}`);

  // ==================== DVORAK CELLO CONCERTO ====================
  const dvorak = composers.find(c => c.name === "Antonín Dvořák")!;
  console.log("\n🎼 Adding Dvořák Cello Concerto data...\n");
  
  const rostropovich = await prisma.artist.create({
    data: { name: "Mstislav Rostropovich", photoUrl: null },
  });

  const dvorakQuiz = await prisma.quiz.create({
    data: {
      composerId: dvorak.id,
      instrumentId: cello.id,
      pieceName: "Cello Concerto in B minor, Op. 104",
      createdById: adminUser.id,
      duration: 30,
      slices: {
        create: [
          { artistId: rostropovich.id, youtubeUrl: "https://www.youtube.com/watch?v=_lYqoEM4tYs", startTime: 60 },
          { artistId: jacquelineDuPre.id, youtubeUrl: "https://www.youtube.com/watch?v=U_yxtaeFuEQ", startTime: 60 },
          { artistId: yoyoMa.id, youtubeUrl: "https://www.youtube.com/watch?v=190faUQ7xJg", startTime: 60 },
        ],
      },
    },
    include: { composer: true, instrument: true, slices: { include: { artist: true } } },
  });
  console.log(`✅ Dvořák Quiz created: ${dvorakQuiz.pieceName}`);

  console.log("\n🎉 All quizzes created successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
