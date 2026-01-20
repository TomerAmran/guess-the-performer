const https = require('https');
const fs = require('fs');
const path = require('path');

const COMPOSERS_DIR = path.join(__dirname, '..', 'public', 'composers');

// Wikimedia Commons filenames for each composer
// Using Special:FilePath for direct access
const composers = [
  // Baroque Era
  { slug: 'bach', file: 'Johann_Sebastian_Bach.jpg' },
  { slug: 'handel', file: 'George_Frideric_Handel_by_Balthasar_Denner.jpg' },
  { slug: 'vivaldi', file: 'Vivaldi.jpg' },
  { slug: 'monteverdi', file: 'Claudio_Monteverdi.jpg' },
  { slug: 'purcell', file: 'Henry_Purcell_by_John_Closterman.jpg' },
  { slug: 'scarlatti', file: 'Domenico_Scarlatti.jpg' },
  { slug: 'rameau', file: 'Jean-Philippe_Rameau_by_Jacques_Aved.jpg' },
  { slug: 'telemann', file: 'Georg_Philipp_Telemann.jpg' },
  
  // Classical Era
  { slug: 'mozart', file: 'Wolfgang-amadeus-mozart_1.jpg' },
  { slug: 'haydn', file: 'Joseph_Haydn.jpg' },
  { slug: 'beethoven', file: 'Beethoven.jpg' },
  { slug: 'gluck', file: 'Christoph_Willibald_Gluck.jpg' },
  
  // Romantic Era
  { slug: 'chopin', file: 'Frederic_Chopin_photo.jpeg' },
  { slug: 'schubert', file: 'Franz_Schubert_by_Wilhelm_August_Rieder_1875.jpg' },
  { slug: 'schumann', file: 'Robert_Schumann_1839.jpg' },
  { slug: 'liszt', file: 'Franz_Liszt_1858.jpg' },
  { slug: 'brahms', file: 'JohannesBrahms.jpg' },
  { slug: 'tchaikovsky', file: 'Tchaikovsky2.jpg' },
  { slug: 'mendelssohn', file: 'Felix_Mendelssohn_Bartholdy.jpg' },
  { slug: 'dvorak', file: 'Dvorak.jpg' },
  { slug: 'grieg', file: 'Edvard_Grieg_(1888)_by_Elliot_and_Fry.jpg' },
  { slug: 'verdi', file: 'Verdi.jpg' },
  { slug: 'wagner', file: 'RichardWagner.jpg' },
  { slug: 'puccini', file: 'GiacomoPuccini.jpg' },
  { slug: 'berlioz', file: 'Hector_Berlioz.jpg' },
  { slug: 'paganini', file: 'Niccolo_Paganini.jpg' },
  { slug: 'saint-saens', file: 'Camille_Saint-Saens.jpg' },
  { slug: 'franck', file: 'Cesar_Franck.jpg' },
  { slug: 'faure', file: 'Gabriel_Faure.jpg' },
  { slug: 'bruckner', file: 'Anton_bruckner.jpg' },
  { slug: 'mahler', file: 'Gustav_Mahler_1909.jpg' },
  
  // Late Romantic / Early Modern
  { slug: 'debussy', file: 'Claude_Debussy_ca_1908.jpg' },
  { slug: 'ravel', file: 'Maurice_Ravel_1912.jpg' },
  { slug: 'rachmaninoff', file: 'Sergei_Rachmaninoff.jpg' },
  { slug: 'prokofiev', file: 'Sergei_Prokofiev_04.jpg' },
  { slug: 'stravinsky', file: 'Igor_Stravinsky_LOC.jpg' },
  { slug: 'shostakovich', file: 'Dmitri_Shostakovich.jpg' },
  { slug: 'bartok', file: 'Bela_Bartok_1927.jpg' },
  { slug: 'sibelius', file: 'Jean_Sibelius.jpg' },
  { slug: 'strauss-r', file: 'Richard_Strauss.jpg' },
  { slug: 'schoenberg', file: 'Arnold_Schoenberg.jpg' },
  { slug: 'satie', file: 'Erik_Satie.jpg' },
  
  // 20th Century
  { slug: 'gershwin', file: 'George_Gershwin_1937.jpg' },
  { slug: 'copland', file: 'Aaron_Copland_1970.jpg' },
  { slug: 'bernstein', file: 'Leonard_Bernstein.jpg' },
  { slug: 'britten', file: 'Benjamin_Britten.jpg' },
  { slug: 'messiaen', file: 'Olivier_Messiaen.jpg' },
  { slug: 'glass', file: 'Philip_Glass.jpg' },
];

function downloadImage(filename, slug) {
  return new Promise((resolve, reject) => {
    const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=300`;
    const outputPath = path.join(COMPOSERS_DIR, `${slug}.jpg`);
    
    console.log(`Downloading ${slug}...`);
    
    const request = https.get(url, { 
      headers: { 
        'User-Agent': 'Mozilla/5.0 (compatible; ComposerPhotoDownloader/1.0)'
      }
    }, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, {
          headers: { 
            'User-Agent': 'Mozilla/5.0 (compatible; ComposerPhotoDownloader/1.0)'
          }
        }, (redirectResponse) => {
          if (redirectResponse.statusCode !== 200) {
            reject(new Error(`Failed to download ${slug}: ${redirectResponse.statusCode}`));
            return;
          }
          const file = fs.createWriteStream(outputPath);
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`  ✓ ${slug}`);
            resolve(slug);
          });
        }).on('error', reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${slug}: ${response.statusCode}`));
        return;
      }
      
      const file = fs.createWriteStream(outputPath);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`  ✓ ${slug}`);
        resolve(slug);
      });
    });
    
    request.on('error', reject);
  });
}

async function main() {
  console.log('🎼 Downloading composer photos...\n');
  
  // Ensure directory exists
  if (!fs.existsSync(COMPOSERS_DIR)) {
    fs.mkdirSync(COMPOSERS_DIR, { recursive: true });
  }
  
  const results = { success: [], failed: [] };
  
  for (const composer of composers) {
    try {
      await downloadImage(composer.file, composer.slug);
      results.success.push(composer.slug);
    } catch (error) {
      console.error(`  ✗ ${composer.slug}: ${error.message}`);
      results.failed.push(composer.slug);
    }
    // Small delay to be respectful to the server
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log(`\n✅ Downloaded: ${results.success.length}`);
  if (results.failed.length > 0) {
    console.log(`❌ Failed: ${results.failed.length} (${results.failed.join(', ')})`);
  }
}

main().catch(console.error);
