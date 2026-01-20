#!/bin/bash

# Create directory
mkdir -p public/artists

echo "🎼 Downloading artist photos..."

# Function to download with proper User-Agent and follow redirects
download() {
  local slug=$1
  local file=$2
  local url="https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=300"
  
  echo "Downloading $slug..."
  curl -L -s -o "public/artists/${slug}.jpg" \
    -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
    "$url"
  
  # Check if file was downloaded and has content
  if [ -s "public/artists/${slug}.jpg" ]; then
    # Check if it's actually an image
    if file "public/artists/${slug}.jpg" | grep -q "JPEG\|PNG\|image"; then
      echo "  ✓ $slug"
    else
      echo "  ✗ $slug (not an image)"
      rm -f "public/artists/${slug}.jpg"
    fi
  else
    echo "  ✗ $slug (failed)"
    rm -f "public/artists/${slug}.jpg"
  fi
}

# Pianists
download "rubinstein" "Arthur_Rubinstein.jpg"
download "horowitz" "Vladimir_Horowitz_NYWTS.jpg"
download "pollini" "Maurizio_Pollini.jpg"
download "fedorova" "Anna_Fedorova.jpg"
download "tsujii" "Nobuyuki_Tsujii.jpg"
download "matsuev" "Denis_Matsuev.jpg"

# Violinists
download "hilary-hahn" "Hilary_Hahn.jpg"
download "ray-chen" "Ray_Chen.jpg"
download "janine-jansen" "Janine_Jansen.jpg"
download "vengerov" "Maxim_Vengerov.jpg"
download "joshua-bell" "Joshua_Bell.jpg"
download "batiashvili" "Lisa_Batiashvili.jpg"

# Cellists
download "yo-yo-ma" "Yo-Yo_Ma.jpg"
download "maisky" "Mischa_Maisky.jpg"
download "hauser" "Stjepan_Hauser.jpg"

# Flutists
download "galway" "James_Galway.jpg"
download "rampal" "Jean-Pierre_Rampal.jpg"
download "pahud" "Emmanuel_Pahud.jpg"

echo ""
echo "✅ Done! Check public/artists/"
ls -la public/artists/
