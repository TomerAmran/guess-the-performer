#!/bin/bash

# Database Restore Script
# Restores the PostgreSQL database from a backup file

# Load environment variables from .env if it exists
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL environment variable is not set"
  exit 1
fi

# Check if backup file is provided
if [ -z "$1" ]; then
  echo "Usage: ./scripts/restore-db.sh <backup_file.sql>"
  echo ""
  echo "Available backups:"
  ls -la backups/*.sql 2>/dev/null || echo "  No backups found in ./backups/"
  exit 1
fi

BACKUP_FILE="$1"

# Check if backup file exists
if [ ! -f "$BACKUP_FILE" ]; then
  echo "Error: Backup file not found: $BACKUP_FILE"
  exit 1
fi

echo "⚠️  WARNING: This will overwrite the current database!"
echo "Backup file: $BACKUP_FILE"
read -p "Are you sure you want to continue? (yes/no): " CONFIRM

if [ "$CONFIRM" != "yes" ]; then
  echo "Restore cancelled"
  exit 0
fi

echo "Restoring database from backup..."

# Restore using psql
psql "$DATABASE_URL" < "$BACKUP_FILE"

if [ $? -eq 0 ]; then
  echo "✓ Database restored successfully from: $BACKUP_FILE"
else
  echo "✗ Restore failed"
  exit 1
fi
