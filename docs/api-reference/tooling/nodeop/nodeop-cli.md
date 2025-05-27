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
- **`-c, --config arg`**: Configuration file name relative to config-dir.
- **`-l, --logconf arg`**: Logging configuration file name/path for library users.

## Config Options for `sysio::chain_plugin`

- **`--blocks-dir arg`**: Location of the blocks directory (default: "blocks").
- **`--protocol-features-dir arg`**: Location of the protocol_features directory (default: "protocol_features").
- **`--checkpoint arg`**: Pairs of [BLOCK_NUM,BLOCK_ID] that should be enforced as checkpoints.
- **`--wasm-runtime runtime`**: Override default WASM runtime ("sys-vm-jit", "sys-vm").
- **`--profile-account arg`**: Name of an account whose code will be profiled.
- **`--abi-serializer-max-time-ms arg`**: Override default maximum ABI serialization time allowed in ms (default: 15).
- **`--chain-state-db-size-mb arg`**: Maximum size of the chain state database in MiB (default: 1024).
- **`--chain-state-db-guard-size-mb arg`**: Shut down node when free space in the chain state database drops below this size in MiB (default: 128).
- **`--signature-cpu-billable-pct arg`**: Percentage of actual signature recovery cpu to bill (default: 50).
- **`--chain-threads arg`**: Number of worker threads in controller thread pool (default: 2).
- **`--contracts-console`**: Print contract's output to console.
- **`--actor-whitelist arg`**: Account added to actor whitelist (can specify multiple times).
- **`--actor-blacklist arg`**: Account added to actor blacklist (can specify multiple times).
- **`--contract-whitelist arg`**: Contract account added to contract whitelist (can specify multiple times).
- **`--contract-blacklist arg`**: Contract account added to contract blacklist (can specify multiple times).
- **`--action-blacklist arg`**: Action (in the form code::action) added to action blacklist (can specify multiple times).
- **`--key-blacklist arg`**: Public key added to blacklist of keys that should not be included in authorities (can specify multiple times).
- **`--sender-bypass-whiteblacklist arg`**: Deferred transactions sent by accounts in this list do not have any of the subjective whitelist/blacklist checks applied to them (can specify multiple times).
- **`--read-mode arg`**: Database read mode ("speculative", "head", "read-only", "irreversible").
- **`--api-accept-transactions arg`**: Allow API transactions to be evaluated and relayed if valid (default: 1).
- **`--validation-mode arg`**: Chain validation mode ("full" or "light").
- **`--disable-ram-billing-notify-checks`**: Disable the check which subjectively fails a transaction if a contract bills more RAM to another account within the context of a notification handler.
- **`--maximum-variable-signature-length arg`**: Limit the maximum length of variable components in a variable-length signature to this size in bytes (default: 16384).
- **`--trusted-producer arg`**: Indicate a producer whose blocks headers signed by it will be fully validated, but transactions in those validated blocks will be trusted.
- **`--database-map-mode arg`**: Database map mode ("mapped", "heap", or "locked").

## Command Line Options for `sysio::chain_plugin`

- **`--genesis-json arg`**: File to read Genesis State from.
- **`--genesis-timestamp arg`**: Override the initial timestamp in the Genesis State file.
- **`--print-genesis-json`**: Extract genesis_state from blocks.log as JSON, print to console, and exit.
- **`--extract-genesis-json arg`**: Extract genesis_state from blocks.log as JSON, write into specified file, and exit.
- **`--print-build-info`**: Print build environment information to console as JSON and exit.
- **`--extract-build-info arg`**: Extract build environment information as JSON, write into specified file, and exit.
- **`--force-all-checks`**: Do not skip any validation checks while replaying blocks (useful for replaying blocks from untrusted source).
- **`--disable-replay-opts`**: Disable optimizations that specifically target replay.
- **`--replay-blockchain`**: Clear chain state database and replay all blocks.
- **`--hard-replay-blockchain`**: Clear chain state database, recover as many blocks as possible from the block log, and then replay those blocks.
- **`--delete-all-blocks`**: Clear chain state database and block log.
- **`--truncate-at-block arg`**: Stop hard replay/block log recovery at this block number (if set to non-zero number).
- **`--terminate-at-block arg`**: Terminate after reaching this block number (if set to a non-zero number).
- **`--snapshot arg`**: File to read Snapshot State from.

## Config Options for `sysio::http_client_plugin`

- **`--https-client-root-cert arg`**: PEM encoded trusted root certificate (or path to file containing one) used to validate any TLS connections made. (may specify multiple times)
- **`--https-client-validate-peers arg`**: Validate peer certificates (default: 1).

## Config Options for `sysio::http_plugin`

- **`--unix-socket-path arg`**: Filename to create a unix socket for HTTP RPC.
- **`--http-server-address arg`**: The local IP and port to listen for incoming HTTP connections (default: 127.0.0.1:8888).
- **`--https-server-address arg`**: The local IP and port to listen for incoming HTTPS connections.
- **`--https-certificate-chain-file arg`**: Filename with the certificate chain to present on HTTPS connections. PEM format.
- **`--https-private-key-file arg`**: Filename with HTTPS private key in PEM format.
- **`--https-ecdh-curve arg`**: Configure HTTPS ECDH curve (default: secp384r1).
- **`--access-control-allow-origin arg`**: Specify the Access-Control-Allow-Origin to be returned on each request.
- **`--access-control-allow-headers arg`**: Specify the Access-Control-Allow-Headers to be returned on each request.
- **`--access-control-max-age arg`**: Specify the Access-Control-Max-Age to be returned on each request.
- **`--access-control-allow-credentials`**: Specify if Access-Control-Allow-Credentials: true should be returned on each request.
- **`--max-body-size arg`**: The maximum body size in bytes allowed for incoming RPC requests (default: 2097152).
- **`--http-max-bytes-in-flight-mb arg`**: Maximum size in megabytes http_plugin should use for processing HTTP requests (default: 500).
- **`--http-max-response-time-ms arg`**: Maximum time for processing a request (default: 30 ms).
- **`--verbose-http-errors`**: Append the error log to HTTP responses.
- **`--http-validate-host arg`**: If set to false, any incoming "Host" header is considered valid (default: 1).
- **`--http-alias arg`**: Additionaly acceptable values for the "Host" header of incoming HTTP requests, can be specified multiple times.
- **`--http-threads arg`**: Number of worker threads in HTTP thread pool (default: 2).

## Config Options for `sysio::login_plugin`

- **`--max-login-requests arg`**: The maximum number of pending login requests (default: 1000000).
- **`--max-login-timeout arg`**: The maximum timeout for pending login requests in seconds (default: 60).

## Config Options for `sysio::net_plugin`

- **`--p2p-listen-endpoint arg`**: The host:port used to listen for incoming p2p connections (default: 0.0.0.0:9876).
- **`--p2p-server-address arg`**: An externally accessible host:port for identifying this node. Defaults to p2p-listen-endpoint.
- **`--p2p-peer-address arg`**: The public endpoint of a peer node to connect to, use multiple p2p-peer-address options as needed to compose a network.
- **`--p2p-max-nodes-per-host arg`**: Maximum number of client nodes from any single IP address (default: 1).
- **`--p2p-accept-transactions arg`**: Allow transactions received over p2p network to be evaluated and relayed if valid (default: 1).
- **`--agent-name arg`**: The name supplied to identify this node amongst the peers (default: SYS Test Agent).
- **`--allowed-connection arg`**: Can be 'any', 'producers', 'specified', or 'none'.
- **`--peer-key arg`**: Optional public key of peer allowed to connect. May be used multiple times.
- **`--peer-private-key arg`**: Tuple of [PublicKey, WIF private key] (may specify multiple times).
- **`--max-clients arg`**: Maximum number of clients from which connections are accepted, use 0 for no limit.
- **`--connection-cleanup-period arg`**: Number of seconds to wait before cleaning up dead connections.
- **`--max-cleanup-time-msec arg`**: Max connection cleanup time per cleanup call in milliseconds.
- **`--p2p-dedup-cache-expire-time-sec arg`**: Maximum time to track transaction for duplicate optimization.
- **`--net-threads arg`**: Number of worker threads in net_plugin thread pool.
- **`--sync-fetch-span arg`**: Number of blocks to retrieve in a chunk from any individual peer during synchronization.
- **`--use-socket-read-watermark arg`**: Enable experimental socket read watermark optimization.
- **`--peer-log-format arg`**: The string used to format peers when logging messages about them.

## Config Options for `sysio::trace_api_plugin`

- **`--trace-dir arg`**: Specifies the location of the trace directory (absolute path or relative to the application data directory). This directory stores the trace data generated by the plugin.
- **`--trace-slice-stride arg`**: Defines the number of blocks each "slice" of trace data will contain on the filesystem (default: 10000 blocks). This helps in managing the segmentation of trace data for better access and management.
- **`--trace-minimum-irreversible-history-blocks arg`**: Sets the number of blocks to ensure are kept past the Last Irreversible Block (LIB) for retrieval before "slice" files can be automatically removed. A value of -1 indicates that automatic removal of "slice" files is turned off.
- **`--trace-minimum-uncompressed-irreversible-history-blocks arg`**: Specifies the number of blocks to ensure are uncompressed past the LIB. Compressed "slice" files are still accessible but may carry a performance loss on retrieval. A value of -1 indicates that automatic compression of "slice" files will be turned off.
- **`--trace-rpc-abi arg`**: Provides the ability to specify ABIs used when decoding trace RPC responses. This can be an absolute path to a file containing a valid JSON-encoded ABI, a relative path from the `data-dir` to a file containing a valid JSON-encoded ABI, or directly a JSON-encoded ABI definition.
- **`--trace-no-abis`**: Indicates that the RPC responses will not use ABIs. This option is useful when the trace data does not need interpretation via ABI, or if ABI data is not available or necessary. This is mutually exclusive with specifying `--trace-rpc-abi`.
