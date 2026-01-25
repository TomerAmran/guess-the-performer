#!/bin/bash

# Database Backup Script
# Creates a timestamped backup of the PostgreSQL database

# Load environment variables from .env if it exists
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL environment variable is not set"
  echo "Please set it in your .env file or export it before running this script"
  exit 1
fi

# Create backups directory if it doesn't exist
mkdir -p backups

# Generate timestamp for filename
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILE="backups/db_backup_${TIMESTAMP}.sql"

echo "Creating database backup..."
echo "Backup file: $BACKUP_FILE"

# Run pg_dump using the DATABASE_URL
pg_dump "$DATABASE_URL" > "$BACKUP_FILE"

if [ $? -eq 0 ]; then
  echo "✓ Backup created successfully: $BACKUP_FILE"
  echo "  Size: $(du -h "$BACKUP_FILE" | cut -f1)"
else
  echo "✗ Backup failed"
  rm -f "$BACKUP_FILE"
  exit 1
fi
