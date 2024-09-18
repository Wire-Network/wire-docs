---
sidebar_position: 5
id: launch-local-node
---

# Launching Local Node

This section explains how to run `nodeop` and `kiod`.

## Starting `kiod`

Typically a user would just create a wallet first and in doing so it would start up `kiod`.

If for some reason `kiod` isn't running, use the command `kiod` to restart.

You should see some output that looks like this:

```bash
info  2024-05-29T13:48:18.634 kiod     wallet_plugin.cpp:38          plugin_initialize    ] initializing wallet plugin
info  2024-05-29T13:48:18.635 kiod     wallet_api_plugin.cpp:69      plugin_startup       ] starting wallet_api_plugin
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/create
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/create_key
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/get_public_keys
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/import_key
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/list_keys
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/list_wallets
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/lock
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/lock_all
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/open
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/remove_key
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/set_timeout
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/sign_digest
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/sign_transaction
info  2024-05-29T13:48:18.635 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/wallet/unlock
info  2024-05-29T13:48:18.636 kiod     http_plugin.cpp:927           add_handler          ] add api url: /v1/node/get_supported_apis
```

### Troubleshooting

If you encounter a message similar to the one below:

![kiod-startup-error](/img/errors/kiod-start-error.png)

This is because another instance of `kiod` process might be running in the background.

Kill all instances: `pkill kiod`. Then rerun `kiod`

## Starting `nodeop`

To start `nodeop`, run:

```bash
nodeop -e -p sysio \
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
--verbose-http-errors >> nodeop.log 2>&1 &
```

Command breakdown:

- starts `nodeop` with essential plugins;
- configures the server address;
- enables CORS without restrictions (\*) and includes development logging;
- activates contract debugging and logging.

:::info[NOTE]
CORS is enabled for all (\*) for development only. Never enable unrestricted CORS on publicly accessible nodes!
:::

### Troubleshooting

- #### `Database dirty flag` error

If you see error that looks like the examples below:

![nodeop-error](/img/errors/nodeop-error.png)

```bash
Database dirty flag set (likely due to unclean shutdown): replay required
```

Try and include `--replay-blockchain` or `--hard-replay-blockchain` flag to the `nodeop` startup command.

```bash
nodeop -e -p sysio \
--plugin eosio::producer_plugin \
--plugin eosio::producer_api_plugin \
--plugin eosio::chain_api_plugin \
--plugin eosio::http_plugin \
--plugin eosio::history_plugin \
--plugin eosio::history_api_plugin \
--filter-on="*" \
--access-control-allow-origin='*' \
--contracts-console \
--http-validate-host=false --replay-blockchain \
--verbose-http-errors >> nodeop.log 2>&1 &
```

If you want to a clean fresh state of the chain, you may want to use `--delete-all-blocks`.

More details on troubleshooting `nodeop` can be found [here](../api-reference/tooling/nodeop/troubleshooting.md).

You could also change `nodeop.log` file's location to whatever directory you want.

If there isn't a process running, use the [startup command](#starting-nodeop).

### Validating `nodeop`

Check that `nodeop` is producing blocks. Run the following command:

```bash
tail -f nodeop.log
```

You should see some output in the console similar to:

```bash
info  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block b50adde5943bdde1... #44 at [timestamp] signed by sysio [trxs: 0, lib: 43, confirmed: 0]
info  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block 39b2a4fef9db084f... #45 at [timestamp] signed by sysio [trxs: 0, lib: 44, confirmed: 0]
info  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block cd23d3646d0166dc... #46 at [timestamp] signed by sysio [trxs: 0, lib: 45, confirmed: 0]
info  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block 14bd99c3c3ffd441... #47 at [timestamp] signed by sysio [trxs: 0, lib: 46, confirmed: 0]
info  [timestamp] nodeop producer_plugin.cpp:2293 produce_block ] Produced block 2e5fb9d0f2dce119... #48 at [timestamp] signed by sysio [trxs: 0, lib: 47, confirmed: 0]
```

Verify the `[timestamp]` is a recent one and that you aren't looking at a stale logs.

To exit logs: <kbd>Ctrl</kbd> + <kbd>C</kbd>

### Check the Wallet

Open the shell and run the `clio wallet list` command to list available wallets. We need to validate the installation and see that the command line client clio is working as intended.

You should see a response with an empty list of wallets:

```bash
Wallets:
[]
```

From this point forward, you'll be executing commands from your local system.

### Check `nodeop` endpoints

This step ensures that the RPC API is functioning properly. You can choose one of the following methods:

#### 3.1. Using `clio`

```bash
clio get info 
```

#### 3.2. HTTP GET request to `/get_info`

Use your browser to access the `get_info` endpoint from the `chain_api_plugin`. Simply click [http://localhost:8888/v1/chain/get_info](http://localhost:8888/v1/chain/get_info).

![verifying nodeop running](/img/chain-api-verify-nodeop.png) Alternatively, check the endpoint directly from your terminal using the command:

`curl http://localhost:8888/v1/chain/get_info`

![Curl request verifying nodeop running](/img/curl-request-verify-nodeop.png)

---

Third-party tools used in the steps above:

- [JSON Formatter Chrome Extension](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)
- [curl](https://curl.se/)
- [jq](https://jqlang.github.io/jq/download/)
