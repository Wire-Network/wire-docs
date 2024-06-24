---
sidebar_position: 5
id: launch-local-node
---

# Launching Local Node

This section explains how to run `nodeos` and `keosd`.

## Starting `keosd`

Typically a user would just create a wallet first and in doing so it would start up `keosd`.

If for some reason `keosd` isn't running, use the command `keosd` to restart.

You should see some output that looks like this:

```bash
info  2024-05-29T13:48:18.634 keosd     wallet_plugin.cpp:38          plugin_initialize    ] initializing wallet plugin
info  2024-05-29T13:48:18.635 keosd     wallet_api_plugin.cpp:69      plugin_startup       ] starting wallet_api_plugin
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/create
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/create_key
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/get_public_keys
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/import_key
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/list_keys
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/list_wallets
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/lock
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/lock_all
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/open
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/remove_key
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/set_timeout
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/sign_digest
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/sign_transaction
info  2024-05-29T13:48:18.635 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/unlock
info  2024-05-29T13:48:18.636 keosd     http_plugin.cpp:927           add_handler          ] add api url: /v1/node/get_supported_apis
```

### Troubleshooting

If you encounter a message similar to the one below:

![keosd-startup-error](/img/errors/keosd-start-error.png)

This is because another instance of `keosd` process might be running in the background.

Kill all instances: `pkill keosd`. Then rerun `keosd`

## Starting `nodeos`

To start `nodeos`, run:

```bash
nodeos -e -p eosio \
--plugin eosio::producer_plugin \
--plugin eosio::producer_api_plugin \
--plugin eosio::chain_api_plugin \
--plugin eosio::http_plugin \
--plugin eosio::history_plugin \
--plugin eosio::history_api_plugin \
--filter-on="*" \
--access-control-allow-origin='*' \
--contracts-console \
--http-validate-host=false \
--verbose-http-errors >> nodeos.log 2>&1 &
```

Command breakdown:

- starts `nodeos` with essential plugins;
- configures the server address;
- enables CORS without restrictions (\*) and includes development logging;
- activates contract debugging and logging.

:::info[NOTE]
CORS is enabled for all (\*) for development only. Never enable unrestricted CORS on publicly accessible nodes!
:::

### Troubleshooting

After starting `nodeos`, if may see an error message like the one below:

![nodeos-error](/img/errors/nodeos-error.png)

or

```bash
Database dirty flag set (likely due to unclean shutdown): replay required
```

To fix the error, try and include `--replay-blockchain` or `--hard-replay-blockchain` flag to the startup command.

```bash
nodeos -e -p eosio \
--plugin eosio::producer_plugin \
--plugin eosio::producer_api_plugin \
--plugin eosio::chain_api_plugin \
--plugin eosio::http_plugin \
--plugin eosio::history_plugin \
--plugin eosio::history_api_plugin \
--filter-on="*" \
--access-control-allow-origin='*' \
--contracts-console \
--http-validate-host=false \
--verbose-http-errors >> nodeos.log 2>&1 \
--replay-blockchain
```

If you want to a clean fresh state of the chain, you may want to use `--delete-all-blocks`.

More details on troubleshooting `nodeos` can be found [here](https://developers.eos.io/manuals/eos/v2.0/nodeos/troubleshooting/index).

You could also change `nodeos.log` file's location to whatever directory you want.

### Validating `nodeos`

Check that `nodeos` is producing blocks. Run the following command:

```bash
tail -f nodeos.log
```

You should see some output in the console similar to:

```bash
info  [timestamp] nodeos producer_plugin.cpp:2293 produce_block ] Produced block b50adde5943bdde1... #44 at [timestamp] signed by eosio [trxs: 0, lib: 43, confirmed: 0]
info  [timestamp] nodeos producer_plugin.cpp:2293 produce_block ] Produced block 39b2a4fef9db084f... #45 at [timestamp] signed by eosio [trxs: 0, lib: 44, confirmed: 0]
info  [timestamp] nodeos producer_plugin.cpp:2293 produce_block ] Produced block cd23d3646d0166dc... #46 at [timestamp] signed by eosio [trxs: 0, lib: 45, confirmed: 0]
info  [timestamp] nodeos producer_plugin.cpp:2293 produce_block ] Produced block 14bd99c3c3ffd441... #47 at [timestamp] signed by eosio [trxs: 0, lib: 46, confirmed: 0]
info  [timestamp] nodeos producer_plugin.cpp:2293 produce_block ] Produced block 2e5fb9d0f2dce119... #48 at [timestamp] signed by eosio [trxs: 0, lib: 47, confirmed: 0]
```

To exit logs: <kbd>Ctrl</kbd> + <kbd>C</kbd>

### Check the Wallet

Open the shell and run the `cleos wallet list` command to list available wallets. We need to validate the installation and see that the command line client cleos is working as intended.

You should see a response with an empty list of wallets:

```bash
Wallets:
[]
```

From this point forward, you'll be executing commands from your local system.

### Check `nodeos` endpoints

This step ensures that the RPC API is functioning properly. You can choose one of the following methods:

Use your browser to access the `get_info` endpoint from the `chain_api_plugin`. Simply click http://localhost:8888/v1/chain/get_info.

![verifying nodeos running](/img/chain-api-verify-nodeos.png) Alternatively, check the endpoint directly from your terminal using the command:

`curl http://localhost:8888/v1/chain/get_info`

![Curl request verifying nodeos running](/img/curl-request-verify-nodeos.png)

---

Third-party tools used in the steps above:

- [JSON Formatter Chrome Extension](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)
- [curl](https://curl.se/)
- [jq](https://jqlang.github.io/jq/download/)
