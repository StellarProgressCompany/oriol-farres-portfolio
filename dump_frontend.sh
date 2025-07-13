#!/usr/bin/env bash
#
# dump_frontend.sh
# Generates a full dump of frontend/src (excluding assets/ and package-lock.json) into frontend-dump.txt

# Configuration
SRC_DIR="frontend/src"
OUT_FILE="frontend-dump.txt"
DELIM="------------------------------------------------------------"

# Start fresh
rm -f "$OUT_FILE"

{
  echo "=== Directory tree of $SRC_DIR ==="
  # list all dirs and files, but prune assets/ and package-lock.json
  find "$SRC_DIR" \
    \( -path "$SRC_DIR/assets" -o -name 'package-lock.json' \) -prune \
    -o -print

  echo
  echo "=== File contents ==="
  echo

  # For each file under frontend (excluding assets and package-lock.json), dump name + content
  find "$SRC_DIR" \
    \( -path "$SRC_DIR/assets" -o -name 'package-lock.json' \) -prune \
    -o -type f -print \
  | sort \
  | while read -r file; do
      echo "$DELIM"
      echo "File: $file"
      echo "$DELIM"
      cat "$file"
      echo
    done
} >> "$OUT_FILE"

echo "Done! Output written to $OUT_FILE"
