echo "Backup process started at $NOW" >> "$LOGFILE"

# Step 1: Create a snapshot
echo "Creating snapshot..." >> "$LOGFILE"
result=$(curl -s -X POST http://localhost:8887/v1/producer/create_snapshot)

if [[ $? -ne 0 || -z "$result" ]]; then
  echo "Error: Failed to create snapshot." >> "$LOGFILE"
  exit 1
fi

head_block=$(echo "$result" | jq -r '.head_block_id')
snapshot_path=$(echo "$result" | jq -r '.snapshot_name')

if [[ -z "$head_block" || -z "$snapshot_path" ]]; then
  echo "Error: Invalid snapshot response." >> "$LOGFILE"
  exit 1
fi

echo "Snapshot created at: $snap_name" >> "$LOGFILE"

# Step 2: Fetch block number
block_num=$(curl -s -X POST "http://localhost:8888/v1/chain/get_block" \
  -H "Content-Type: application/json" \
  -d "{\"block_num_or_id\": \"$head_block\"}" | jq '.block_num')

if [[ $? -ne 0 || -z "$block_num" ]]; then
  echo "Error: Failed to fetch block number for $head_block." >> "$LOGFILE"
  exit 1
fi

echo "Head block number: $block_num" >> "$LOGFILE"

# Step 3: Prepare files for backup
OUTFILE="$BACKUP_DIR/backup-$block_num-$NOW.tar.zst"
TMP_DIR=$(mktemp -d)

echo "Preparing files for backup..." >> "$LOGFILE"

# Copy required files
# cp -v "$CHAIN_API_PATH/blocks/blocks.log" "$TMP_DIR/blocks" >> "$LOGFILE" 2>&1
mkdir -p "$TMP_DIR/blocks" && rsync -av --exclude='reversible' "$CHAIN_API_PATH/blocks/" "$TMP_DIR/blocks/" >> "$LOGFILE" 2>&1
mkdir -p "$TMP_DIR/snapshots" && cp -v "$snapshot_path" "$TMP_DIR/snapshots" >> "$LOGFILE" 2>&1
cp -rv "$CHAIN_API_PATH/state-history" "$TMP_DIR/" >> "$LOGFILE" 2>&1

# Step 4: Compress files
echo "Compressing backup..." >> "$LOGFILE"
tar --zstd -cf "$OUTFILE" -C "$TMP_DIR" . >> "$LOGFILE" 2>&1

# Cleanup temporary directory
rm -rf "$TMP_DIR"

echo "Backup completed: $OUTFILE" >> "$LOGFILE"
echo "Backup process completed successfully at $(date '+%Y-%m-%d_%H-%M-%S')" >> "$LOGFILE