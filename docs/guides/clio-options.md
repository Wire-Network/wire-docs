---
id: clio-options
---

# `clio` options

`clio` CLI interface provides several options to customize and control its operation when interacting with the blockchain.
Below is command options that enable you to connect to a specific `nodeop` instance, handle security for transactions, manage wallet connections, and modify verbosity for troubleshooting.

```console
Options:
  -h,--help                   Print this help message and exit
  -u,--url TEXT=http://127.0.0.1:8888/
                              The http/https URL where nodeop is running
  --wallet-url TEXT=unix:///home/jack/sysio-wallet/kiod.sock
                              The http/https URL where kiod is running
  -r,--header                 Pass specific HTTP header; repeat this option to pass multiple headers
  -n,--no-verify              Don't verify peer certificate when using HTTPS
  --no-auto-kiod              Don't automatically launch a kiod if one is not currently running
  -v,--verbose                Output verbose errors and action console output
  --print-request             Print HTTP request to STDERR
  --print-response            Print HTTP response to STDERR
```

## Examples

### Connect to a `nodeop` instance via `--url` option

`clio` can connect to a specific node by using the `--url` optional argument, followed by the HTTP/HTTPS address and port number.

To connect to a `nodeop` instance using `clio`, add the `-url` option followed by the instance’s URL.

```shell
clio --url <instance-url>:<port> COMMAND
```

:::info[Default address:port]
| If no optional arguments are used (i.e. no `--url`), `clio` attempts to connect to a local `nodeop` running at localhost or `127.0.0.1` and default port `8888`. Use the `nodeop` command line arguments or [config.ini](/docs/api-reference/tooling/nodeop/usage/nodeop-configuration.md) file to specify a different address.
:::

---

### Connect to specific wallet via `--wallet-url`

Add the `--wallet-url` option to specify the `kiod` instance

```shell
clio --wallet-url http://<kiod-host>:8900 COMMAND
```

:::info[Default address:port]
| If no optional arguments are used (i.e. no `--wallet-url`), `clio` attempts to connect to a local `nodeop` or `kiod` running at localhost or `127.0.0.1` and default port `8900`. Use the `kiod` command line arguments or [config.ini](/docs/api-reference/tooling/kiod/usage.md#launching-kiod-manually) file to specify a different address.
:::

## Reference

See the following reference guides for command line usage and related options:

* [clio](/docs/api-reference/tooling/clio/command-reference/index.md) command
