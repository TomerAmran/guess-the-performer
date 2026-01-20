#!/bin/bash

# Create directory
mkdir -p public/composers

echo "🎼 Downloading composer photos..."

# Function to download with proper User-Agent and follow redirects
download() {
  local slug=$1
  local file=$2
  local url="https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=300"
  
  echo "Downloading $slug..."
  curl -L -s -o "public/composers/${slug}.jpg" \
    -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
    "$url"
  
  # Check if file was downloaded and has content
  if [ -s "public/composers/${slug}.jpg" ]; then
    echo "  ✓ $slug"
  else
    echo "  ✗ $slug (failed)"
    rm -f "public/composers/${slug}.jpg"
  fi
}

# Baroque Era
download "bach" "Johann_Sebastian_Bach.jpg"
download "handel" "George_Frideric_Handel_by_Balthasar_Denner.jpg"
download "vivaldi" "Vivaldi.jpg"
download "monteverdi" "Claudio_Monteverdi.jpg"
download "purcell" "Henry_Purcell_by_John_Closterman.jpg"
download "scarlatti" "Domenico-scarlatti.jpg"
download "rameau" "Attribu%C3%A9_%C3%A0_Joseph_Aved%2C_Portrait_de_Jean-Philippe_Rameau_%28vers_1728%29_-_001.jpg"
download "telemann" "Georg_Philipp_Telemann.png"

# Classical Era
download "mozart" "Wolfgang-amadeus-mozart_1.jpg"
download "haydn" "Joseph_Haydn.jpg"
download "beethoven" "Beethoven.jpg"
download "gluck" "Christoph_Willibald_Gluck_painted_by_Joseph_Duplessis.jpg"

# Romantic Era
download "chopin" "Frederic_Chopin_photo.jpeg"
download "schubert" "Franz_Schubert_by_Wilhelm_August_Rieder_1875.jpg"
download "schumann" "Robert_Schumann_1839.jpg"
download "liszt" "Franz_Liszt_1858.jpg"
download "brahms" "JohannesBrahms.jpg"
download "tchaikovsky" "Portr%C3%A4t_des_Komponisten_Pjotr_I._Tschaikowski_%281840-1893%29.jpg"
download "mendelssohn" "Felix_Mendelssohn_Bartholdy.jpg"
download "dvorak" "Dvorak.jpg"
download "grieg" "Edvard_Grieg_%281888%29_by_Elliot_and_Fry_-_02.jpg"
download "verdi" "Verdi.jpg"
download "wagner" "RichardWagner.jpg"
download "puccini" "GiacomoPuccini.jpg"
download "berlioz" "Hector_Berlioz.jpg"
download "paganini" "Niccolo_Paganini01.jpg"
download "saint-saens" "Camille_Saint-Sa%C3%ABns.jpg"
download "franck" "C%C3%A9sar_Franck_2.jpg"
download "faure" "Gabriel_Faur%C3%A9_by_Pierre_Petit.jpg"
download "bruckner" "Anton_bruckner.jpg"
download "mahler" "Gustav_Mahler_1909.jpg"

# Late Romantic / Early Modern
download "debussy" "Claude_Debussy_ca_1908%2C_foto_av_F%C3%A9lix_Nadar.jpg"
download "ravel" "Maurice_Ravel_1912.jpg"
download "rachmaninoff" "Sergei_Rachmaninoff_cph.3a40575.jpg"
download "prokofiev" "Sergei_Prokofiev_circa_1918_over_Chair_Bain.jpg"
download "stravinsky" "Igor_Stravinsky_LOC_32392u.jpg"
download "shostakovich" "Dmitri_Shostakovich_credit_Deutsche_Fotothek_adjusted.jpg"
download "bartok" "Bela_Bartok_1927.jpg"
download "sibelius" "Jean_Sibelius%2C_1913.jpg"
download "strauss-r" "Strauss-1918.jpg"
download "schoenberg" "Arnold_Schoenberg_la_1948.jpg"
download "satie" "Erik_Satie_%281919%29_by_Man_Ray.jpg"

# 20th Century
download "gershwin" "George_Gershwin_1937.jpg"
download "copland" "Aaron_Copland_1970.jpg"
download "bernstein" "Leonard_Bernstein_by_Jack_Mitchell.jpg"
download "britten" "Benjamin_Britten%2C_London_Records_1968_publicity_photo_for_Wikipedia.jpg"
download "messiaen" "Olivier_Messiaen_1986_%28cropped%29.jpg"
download "glass" "Philip_Glass_in_Florence%2C_Italy_-_1993.jpg"

echo ""
echo "✅ Done! Check public/composers/"
ls -la public/composers/
