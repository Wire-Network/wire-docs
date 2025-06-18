# Nodeop Configuration Document

## Application Options

- **`--plugin arg`**: Plugins to enable, may be specified multiple times.

## Application Command Line Options

- **`-h, --help`**: Print this help message and exit.
- **`-v, --version`**: Print version information.
- **`--full-version`**: Print full version information.
- **`--print-default-config`**: Print default configuration template.
- **`-d, --data-dir arg`**: Directory containing program runtime data.
- **`--config-dir arg`**: Directory containing configuration files such as `config.ini`.
- **`-c [ --config ] arg (=config.ini)`**: Configuration file name relative to config-dir.
- **`-l [ --logconf ] arg (=logging.json)`**: Logging configuration file name/path for library users.

## Config Options for `sysio::chain_plugin`

- **`--blocks-dir arg (="blocks")`**: the location of the blocks directory (absolute path or relative to application data dir)  
- **`--blocks-log-stride arg`**: split the block log file when the head block number is the multiple of the stride  
  When the stride is reached, the current block log and index will be renamed `<blocks-retained-dir>/blocks-<start num>-<end num>.log/index` and a new current block log and index will be created with the most recent block. All files following this format will be used to construct an extended block log.  
- **`--max-retained-block-files arg`**: the maximum number of blocks files to retain so that the blocks in those files can be queried.  
  When the number is reached, the oldest block file would be moved to archive dir or deleted if the archive dir is empty. The retained block log files should not be manipulated by users.  
- **`--blocks-retained-dir arg`**: the location of the blocks retained directory (absolute path or relative to blocks dir).  
  If the value is empty, it is set to the value of blocks dir.  
- **`--blocks-archive-dir arg`**: the location of the blocks archive directory (absolute path or relative to blocks dir).  
  If the value is empty, blocks files beyond the retained limit will be deleted. All files in the archive directory are completely under user's control, i.e. they won't be accessed by nodeop anymore.  
- **`--state-dir arg (="state")`**: the location of the state directory (absolute path or relative to application data dir)  
- **`--state-log arg (=0)`**: Maintain a block state log, using the same configuration as the block log.  
- **`--protocol-features-dir arg (="protocol_features")`**: the location of the protocol_features directory (absolute path or relative to application config dir)  
- **`--checkpoint arg`**: Pairs of [BLOCK_NUM,BLOCK_ID] that should be enforced as checkpoints.  
- **`--wasm-runtime runtime (=sys-vm-jit)`**: Override default WASM runtime ("sys-vm-jit", "sys-vm")  
  "sys-vm-jit": A WebAssembly runtime that compiles WebAssembly code to native x86 code prior to execution.  
  "sys-vm": A WebAssembly interpreter.  
- **`--profile-account arg`**: The name of an account whose code will be profiled  
- **`--abi-serializer-max-time-ms arg (=15)`**: Override default maximum ABI serialization time allowed in ms  
- **`--chain-state-db-size-mb arg (=1024)`**: Maximum size (in MiB) of the chain state database  
- **`--chain-state-db-guard-size-mb arg (=128)`**: Safely shut down node when free space remaining in the chain state database drops below this size (in MiB).  
- **`--signature-cpu-billable-pct arg (=50)`**: Percentage of actual signature recovery cpu to bill. Whole number percentages, e.g. 50 for 50%  
- **`--chain-threads arg (=2)`**: Number of worker threads in controller thread pool  
- **`--contracts-console`**: print contract's output to console  
- **`--deep-mind`**: print deeper information about chain operations  
- **`--actor-whitelist arg`**: Account added to actor whitelist (may specify multiple times)  
- **`--actor-blacklist arg`**: Account added to actor blacklist (may specify multiple times)  
- **`--contract-whitelist arg`**: Contract account added to contract whitelist (may specify multiple times)  
- **`--contract-blacklist arg`**: Contract account added to contract blacklist (may specify multiple times)  
- **`--action-blacklist arg`**: Action (in the form code::action) added to action blacklist (may specify multiple times)  
- **`--key-blacklist arg`**: Public key added to blacklist of keys that should not be included in authorities (may specify multiple times)  
- **`--sender-bypass-whiteblacklist arg`**: Deferred transactions sent by accounts in this list do not have any of the subjective whitelist/blacklist checks applied to them (may specify multiple times)  
- **`--read-mode arg (=head)`**: Database read mode ("head", "irreversible", "speculative").  
  In "head" mode: database contains state changes up to the head block; transactions received by the node are relayed if valid.  
  In "irreversible" mode: database contains state changes up to the last irreversible block; transactions received via the P2P network are not relayed and transactions cannot be pushed via the chain API.  
  In "speculative" mode: database contains state changes by transactions in the blockchain up to the head block as well as some transactions not yet included in the blockchain; transactions received by the node are relayed if valid.  
- **`--api-accept-transactions arg (=1)`**: Allow API transactions to be evaluated and relayed if valid.  
- **`--validation-mode arg (=full)`**: Chain validation mode ("full" or "light").  
  In "full" mode all incoming blocks will be fully validated.  
  In "light" mode all incoming blocks headers will be fully validated; transactions in those validated blocks will be trusted  
- **`--disable-ram-billing-notify-checks`**: Disable the check which subjectively fails a transaction if a contract bills more RAM to another account within the context of a notification handler (i.e. when the receiver is not the code of the action).  
- **`--maximum-variable-signature-length arg (=16384)`**: Subjectively limit the maximum length of variable components in a variable legnth signature to this size in bytes  
- **`--trusted-producer arg`**: Indicate a producer whose blocks headers signed by it will be fully validated, but transactions in those validated blocks will be trusted.  
- **`--database-map-mode arg (=mapped)`**: Database map mode ("mapped", "mapped_private", "heap", or "locked").  
  In "mapped" mode database is memory mapped as a file.  
  In "mapped_private" mode database is memory mapped as a file using a private mapping (no disk writeback until program exit).  
  In "heap" mode database is preloaded into swappable memory and will use huge pages if available.  
  In "locked" mode database is preloaded, locked into memory, and will use huge pages if available.  
- **`--sys-vm-oc-cache-size-mb arg (=1024)`**: Maximum size (in MiB) of the SYS VM OC code cache  
- **`--sys-vm-oc-compile-threads arg (=1)`**: Number of threads to use for SYS VM OC tier-up  
- **`--sys-vm-oc-enable arg (=auto)`**: Enable SYS VM OC tier-up runtime ('auto', 'all', 'none').  
  'auto' - SYS VM OC tier-up is enabled for sysio.* accounts, read-only trxs, and except on producers applying blocks.  
  'all'  - SYS VM OC tier-up is enabled for all contract execution.  
  'none' - SYS VM OC tier-up is completely disabled.  
- **`--enable-account-queries arg (=0)`**: enable queries to find accounts by various metadata.  
- **`--transaction-retry-max-storage-size-gb arg`**: Maximum size (in GiB) allowed to be allocated for the Transaction Retry feature. Setting above 0 enables this feature.  
- **`--transaction-retry-interval-sec arg (=20)`**: How often, in seconds, to resend an incoming transaction to network if not seen in a block. Needs to be at least twice as large as p2p-dedup-cache-expire-time-sec.  
- **`--transaction-retry-max-expiration-sec arg (=120)`**: Maximum allowed transaction expiration for retry transactions, will retry transactions up to this value. Should be larger than transaction-retry-interval-sec.  
- **`--transaction-finality-status-max-storage-size-gb arg`**: Maximum size (in GiB) allowed to be allocated for the Transaction Finality Status feature. Setting above 0 enables this feature.  
- **`--transaction-finality-status-success-duration-sec arg (=180)`**: Duration (in seconds) a successful transaction's Finality Status will remain available from being first identified.  
- **`--transaction-finality-status-failure-duration-sec arg (=180)`**: Duration (in seconds) a failed transaction's Finality Status will remain available from being first identified.  
- **`--disable-replay-opts`**: disable optimizations that specifically target replay  
- **`--integrity-hash-on-start`**: Log the state integrity hash on startup  
- **`--integrity-hash-on-stop`**: Log the state integrity hash on shutdown  
- **`--block-log-retain-blocks arg`**: If set to greater than 0, periodically prune the block log to store only configured number of most recent blocks. If set to 0, no blocks are be written to the block log; block log file is removed after startup.  

## Command Line Options for `sysio::chain_plugin`

- **`--genesis-json arg`**: File to read the Genesis State from.
- **`--genesis-timestamp arg`**: Override the initial timestamp in the Genesis State file.
- **`--print-genesis-json`**: Extract `genesis_state` from `blocks.log`, print it to the console in JSON format, and exit.
- **`--extract-genesis-json arg`**: Extract `genesis_state` from `blocks.log` and write it as JSON into the specified file, then exit.
- **`--print-build-info`**: Print build environment information to the console as JSON and exit.
- **`--extract-build-info arg`**: Extract build environment information as JSON and write it to the specified file, then exit.
- **`--force-all-checks`**: Do not skip any validation checks while replaying blocks. Useful for replaying from an untrusted source.
- **`--replay-blockchain`**: Clear the chain state database and replay all blocks from the block log.
- **`--hard-replay-blockchain`**: Clear the chain state database, recover as many blocks as possible from the block log, and replay them.
- **`--delete-all-blocks`**: Clear both the chain state database and block log.
- **`--truncate-at-block arg (=0)`**: Stop hard replay or block log recovery at this block number. A value of 0 disables truncation.
- **`--terminate-at-block arg (=0)`**: Terminate the node after reaching this block number. A value of 0 disables termination.
- **`--snapshot arg`**: File to read Snapshot State from.

## Config Options for `sysio::http_plugin`

- **`--unix-socket-path arg`**: The filename (relative to `data-dir`) to create a Unix socket for HTTP RPC. Leave blank to disable.
- **`--http-server-address arg (=127.0.0.1:8888)`**: IP and port to listen for incoming HTTP connections. Leave blank to disable.
- **`--http-category-address arg`**: Specifies category-based endpoints in the form `category,address`.  
  Supported formats:
  - `category,host:port`
  - `category,unix_socket_path` (must begin with `/`, `./`, or `../`)
  Valid categories: `chain_ro`, `chain_rw`, `db_size`, `net_ro`, `net_rw`, `producer_ro`, `producer_rw`, `snapshot`, `trace_api`, `prometheus`, `test_control`.

  ⚠️ **Caution**: Two `host:port` pairs with the same port but different hostnames are considered a configuration error, even if they resolve to the same IP.

  **Examples**:
  - `chain_ro,127.0.0.1:8080`
  - `chain_rw,[::1]:8082`
  - `net_ro,localhost:8083`
  - `producer_ro,/tmp/socket.sock`
  - `trace_api,:8086` (binds to all interfaces)

  **Note**: `[::1]` may bind to both IPv4 and IPv6 depending on platform. `:8086` will always bind to both.

- **`--access-control-allow-origin arg`**: Sets `Access-Control-Allow-Origin` in HTTP responses.
- **`--access-control-allow-headers arg`**: Sets `Access-Control-Allow-Headers` in HTTP responses.
- **`--access-control-max-age arg`**: Sets `Access-Control-Max-Age` in HTTP responses.
- **`--access-control-allow-credentials`**: If set, includes `Access-Control-Allow-Credentials: true` in responses.
- **`--max-body-size arg (=2097152)`**: Maximum allowed HTTP request body size in bytes.
- **`--http-max-bytes-in-flight-mb arg (=500)`**: Maximum memory (in MiB) used for handling HTTP requests. `-1` means unlimited. Exceeding this triggers a `503` response.
- **`--http-max-in-flight-requests arg (=-1)`**: Maximum number of concurrent HTTP requests allowed. `-1` for unlimited. Exceeding this triggers a `503` response.
- **`--http-max-response-time-ms arg (=15)`**: Maximum time in milliseconds the main thread may take to process an HTTP request. `-1` means no limit.
- **`--verbose-http-errors`**: Append error log details to HTTP error responses.
- **`--http-validate-host arg (=1)`**: If `false`, all incoming `Host` headers are considered valid.
- **`--http-alias arg`**: Additional acceptable `Host` headers for incoming requests. May be specified multiple times. Includes `http[s]_server_address` by default.
- **`--http-threads arg (=2)`**: Number of worker threads in the HTTP thread pool.
- **`--http-keep-alive arg (=1)`**: If `false`, disables keep-alive even if the client requests it.

### Config Options for `sysio::net_plugin`

- **`--p2p-listen-endpoint arg (=0.0.0.0:9876:0)`**: The actual `host:port[:<rate-cap>]` used to listen for incoming p2p connections. May be used multiple times. The optional rate cap will limit per connection block sync bandwidth to the specified rate. Total allowed bandwidth is the rate-cap multiplied by the connection count limit. A number alone will be interpreted as bytes per second. The number may be suffixed with units. Supported units are: 'B/s', 'KB/s', 'MB/s, 'GB/s', 'TB/s', 'KiB/s', 'MiB/s', 'GiB/s', 'TiB/s'. Transactions and blocks outside of sync mode are not throttled.  
  **Examples**:  
  `192.168.0.100:9876:1MiB/s`  
  `node.example:9876:1512KB/s`  
  `node.example:9876:0.5GB/s`  
  `[2001:db8:85a3:8d3:1319:8a2e:370:7348]:9876:250KB/s`  
  `[::]:9876:1MiB/s`

- **`--p2p-server-address arg`**: An externally accessible host:port for identifying this node. Defaults to p2p-listen-endpoint. May be used as many times as p2p-listen-endpoint. If provided, the first address will be used in handshakes with other nodes. Otherwise the default is used.

- **`--p2p-peer-address arg`**: The public endpoint of a peer node to connect to. Use multiple p2p-peer-address options as needed to compose a network.  
  Syntax: `host:port[:<trx>|<blk>]`  
  The optional 'trx' and 'blk' indicates to node that only transactions 'trx' or blocks 'blk' should be sent.  
  Examples:  
  `p2p.example:9876`  
  `p2p.trx.example:9876:trx`  
  `p2p.blk.example:9876:blk`

- **`--p2p-max-nodes-per-host arg (=1)`**: Maximum number of client nodes from any single IP address.

- **`--p2p-accept-transactions arg (=1)`**: Allow transactions received over p2p network to be evaluated and relayed if valid.

- **`--p2p-auto-bp-peer arg`**: The account and public p2p endpoint of a block producer node to automatically connect to when the it is in producer schedule proximity.  
  Syntax: `account,host:port`  
  Example:  
  `producer1,p2p.example:9876`  
  `producer2,p2p.trx.example:9876:trx`  
  `producer3,p2p.blk.example:9876:blk`

- **`--agent-name arg (=Example Test Agent)`**: The name supplied to identify this node amongst the peers.

- **`--allowed-connection arg (=any)`**: Can be 'any' or 'producers' or 'specified' or 'none'. If 'specified', peer-key must be specified at least once. If only 'producers', peer-key is not required. 'producers' and 'specified' may be combined.

- **`--peer-key arg`**: Optional public key of peer allowed to connect. May be used multiple times.

- **`--peer-private-key arg`**: Tuple of [PublicKey, WIF private key] (may specify multiple times)

- **`--max-clients arg (=25)`**: Maximum number of clients from which connections are accepted, use 0 for no limit

- **`--connection-cleanup-period arg (=30)`**: Number of seconds to wait before cleaning up dead connections

- **`--max-cleanup-time-msec arg (=10)`**: Max connection cleanup time per cleanup call in milliseconds

- **`--p2p-dedup-cache-expire-time-sec arg (=10)`**: Maximum time to track transaction for duplicate optimization

- **`--net-threads arg (=4)`**: Number of worker threads in net_plugin thread pool

- **`--sync-fetch-span arg (=1000)`**: Number of blocks to retrieve in a chunk from any individual peer during synchronization

- **`--sync-peer-limit arg (=3)`**: Number of peers to sync from

- **`--use-socket-read-watermark arg (=0)`**: Enable experimental socket read watermark optimization

- **`--peer-log-format arg (=["${_name}" - ${_cid} ${_ip}:${_port}] )`**: The string used to format peers when logging messages about them. Variables are escaped with `${<variable name>}`.  
  Available Variables:  
  `_name` — self-reported name  
  `_cid` — assigned connection id  
  `_id` — self-reported ID (64 hex characters)  
  `_sid` — first 8 characters of _peer.id  
  `_ip` — remote IP address of peer  
  `_port` — remote port number of peer  
  `_lip` — local IP address connected to peer  
  `_lport` — local port number connected to peer

- **`--p2p-keepalive-interval-ms arg (=10000)`**: Peer heartbeat keepalive message interval in milliseconds

### Config Options for `sysio::trace_api_plugin`

- **`--trace-dir arg (="traces")`**: the location of the trace directory (absolute path or relative to application data dir)

- **`--trace-slice-stride arg (=10000)`**: the number of blocks each "slice" of trace data will contain on the filesystem

- **`--trace-minimum-irreversible-history-blocks arg (=-1)`**: Number of blocks to ensure are kept past LIB for retrieval before "slice" files can be automatically removed. A value of -1 indicates that automatic removal of "slice" files will be turned off.

- **`--trace-minimum-uncompressed-irreversible-history-blocks arg (=-1)`**: Number of blocks to ensure are uncompressed past LIB. Compressed "slice" files are still accessible but may carry a performance loss on retrieval  
  A value of -1 indicates that automatic compression of "slice" files will be turned off.

- **`--trace-rpc-abi arg`**: ABIs used when decoding trace RPC responses.  
  There must be at least one ABI specified OR the flag trace-no-abis must be used.  
  ABIs are specified as "Key=Value" pairs in the form `<account-name>=<abi-def>`  
  Where `<abi-def>` can be:
  - an absolute path to a file containing a valid JSON-encoded ABI  
  - a relative path from `data-dir` to a file containing a valid JSON-encoded ABI

- **`--trace-no-abis`**: Use to indicate that the RPC responses will not use ABIs.  
  Failure to specify this option when there are no trace-rpc-abi configuations will result in an Error.  
  This option is mutually exclusive with trace-rpc-api
