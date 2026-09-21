#!/usr/bin/env bash
set -euo pipefail

# Use the portable POSIX locale so macOS tar/shasum do not emit locale warnings.
export LC_ALL=C
export LANG=C

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
backup_root="${1:-}"

if [[ -z "$backup_root" ]]; then
  echo "Usage: npm run backup -- /absolute/path/to/backup-root" >&2
  exit 64
fi

mkdir -p "$backup_root"
backup_root="$(cd "$backup_root" && pwd)"

case "$backup_root/" in
  "$project_root/"*)
    echo "Backup destination must be outside the project directory." >&2
    exit 64
    ;;
esac

timestamp="$(date +%Y%m%d-%H%M%S)"
name="mars-cambridge-$timestamp"
destination="$backup_root/$name"
mkdir -p "$destination"

git -C "$project_root" bundle create "$destination/$name.bundle" --all

tar \
  --exclude='./.git' \
  --exclude='./node_modules' \
  --exclude='./dist' \
  --exclude='./.DS_Store' \
  -czf "$destination/$name-working-tree.tar.gz" \
  -C "$project_root" .

(
  cd "$destination"
  shasum -a 256 "$name.bundle" "$name-working-tree.tar.gz" > SHA256SUMS
)

git -C "$project_root" rev-parse HEAD > "$destination/GIT_HEAD"
git -C "$project_root" status --short > "$destination/GIT_STATUS"

echo "Backup created: $destination"
echo "Verify with: cd '$destination' && shasum -a 256 -c SHA256SUMS"
