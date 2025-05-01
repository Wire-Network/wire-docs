---
title: Native Logging
link_text: Native Logging
---

Logging for `nodeop` is controlled by the `logging.json` file. CLI options can be passed to `nodeop` to [setup `logging.json`](#setup-loggingjson). The logging configuration file can be used to define [appenders](#appenders) and tie them to [loggers](#loggers) and [logging levels](#logging-levels).

## Setup `logging.json`

The `logging.json` file is usually located in the specified `--config-dir`, the same directory as the `config.ini` file. This path can be explicitly defined using the `-l` or `--logconf` options when starting `nodeop`.

```sh
nodeop --help
```

```console
...
Application Command Line Options:
...
--config-dir arg                               Directory containing configuration files such as config.ini
-l [ --logconf ] arg (=path/to/logging.json))  Logging configuration file name/path for library users (absolute path or 
                                               relative to application config dir)
```

## Logging Levels

The logging level determines the severity of messages that will be logged.
There are six available logging levels:

- `error` - Log output that likely requires operator intervention.
  - Error level logging should be reserved for conditions that are completely unexpected or otherwise need human intervention.
  - Also used to indicate software errors such as: impossible values for an `enum`, out of bounds array access, null pointers, or other conditions that likely will throw an exception.
  - *Note*: Currently, there are numerous `error` level logging that likely should be `warn` as they do not require human intervention. The `net_plugin_impl`, for example, has a number of `error` level logs for bad network connections. This is handled and processed correctly. These should be changed to `warn` or `info`.
- `warn` - Log output indicating unexpected but recoverable errors.
  - Although, `warn` level typically does not require human intervention, repeated output of `warn` level logs might indicate actions needed by an operator.
  - `warn` should not be used simply for conveying information. A `warn` level log is something to take notice of, but not necessarily be concerned about.
- `info` (default) - Log output that provides useful information to an operator.
  - Can be just progress indication or other useful data to a user. Care is taken not to create excessive log output with `info` level logging. For example, no `info` level logging should be produced for every transaction.
  - For progress indication, some multiple of transactions should be processed between each log output; typically, every 1000 transactions.
- `debug` - Useful log output for when non-default logging is enabled.
  - Answers the question: is this useful information for a user that is monitoring the log output. Care should be taken not to create excessive log output; similar to `info` level logging.
  - Enabling `debug` level logging should provide greater insight into behavior without overwhelming the output with log entries.
  - `debug` level should not be used for *trace* level logging; to that end, use `all` (see below).
  - Like `info`, no `debug` level logging should be produced for every transaction. There are specific transaction level loggers dedicated to transaction level logging: `transaction`, `transaction_trace_failure`, `transaction_trace_success`, `transaction_failure_tracing`, `transaction_success_tracing`, `transient_trx_success_tracing`, `transient_trx_failure_tracing`.
- `all` (trace) - For logging that would be overwhelming if `debug` level logging were used.
  - Can be used for trace level logging. Only used in a few places and not completely supported.
  - *Note*: In the future a different logging library may provide better trace level logging support. The current logging framework is not performant enough to enable excess trace level output.

## Appenders

The logging library built into Wire Sysio supports two appender types: [Console](#console) and [GELF](#gelf).

### Console

This will output log messages to the screen. The configuration options are:

- `name` - arbitrary name to identify instance for use in loggers
- `type` - "console"
- `stream` - `std_out` or `std_error`
- `level_colors` - maps a log level to a colour
  - level - see [logging levels](#logging-levels) above
  - color - may be one of ("red", "green", "brown", "blue", "magenta", "cyan", "white", "console_default")
- `enabled` - bool value to enable/disable the appender.

Example:

```json
{
    "name": "consoleout",
    "type": "console",
    "args": {
    "stream": "std_out",

    "level_colors": [{
        "level": "debug",
        "color": "green"
        },{
        "level": "warn",
        "color": "brown"
        },{
        "level": "error",
        "color": "red"
        }
    ]
    },
    "enabled": true
}
```

### GELF

This sends the log messages to `Graylog`. `Graylog` is a fully integrated platform for collecting, indexing, and analyzing log messages. The configuration options are:

- `name` - arbitrary name to identify instance for use in loggers
- `type` - "gelf"
- `endpoint` - ip address and port number
- `host` - Graylog hostname, identifies you to Graylog.
- `enabled` - bool value to enable/disable the appender.

**Example**:

```json
{
    "name": "net",
    "type": "gelf",
    "args": {
        "endpoint": "104.198.210.18:12202”,
        "host": "<YOUR_HOSTNAME>"
    },
    "enabled": true
}
```

## Loggers

The logging library built into Wire Sysio currently supports the following loggers:

- `default` - the default logger, always enabled.
- `net_plugin_impl` - detailed logging for the net plugin.
- `http_plugin` - detailed logging for the http plugin.
- `producer_plugin` - detailed logging for the producer plugin.
- `state_history` - detailed logging for state history plugin.
- `transaction_success_tracing` - detailed log that emits successful verdicts from relay nodes on the P2P network.
- `transaction_failure_tracing` - detailed log that emits failed verdicts from relay nodes on the P2P network.
- `trace_api` - detailed logging for the trace_api plugin.
- `blockvault_client_plugin` - detailed logging for the blockvault client plugin.

The configuration options are:

- `name` - must match one of the names described above.
- `level` - see logging levels below.
- `enabled` - bool value to enable/disable the logger.
- `additivity` - true or false
- `appenders` - list of appenders by name (name in the appender configuration)

**Example**:

```json
{
    "name": "net_plugin_impl",
    "level": "debug",
    "enabled": true,
    "additivity": false,
    "appenders": [
        "net"
    ]
}
```

:::info
| The default logging level for all loggers, if no `logging.json` is provided is `info`. Each logger can be configured independently in the `logging.json` file.
:::

## Example `logging.json`

```json
{
  "includes": [],
  "appenders": [
    {
      "name": "consoleout",
      "type": "console",
      "args": {
        "stream": "std_out",
        "level_colors": [
          {
            "level": "debug",
            "color": "green"
          },
          {
            "level": "info",
            "color": "cyan"
          },
          {
            "level": "warn",
            "color": "brown"
          },
          {
            "level": "error",
            "color": "red"
          }
        ]
      },
      "enabled": true
    }
  ],
  "loggers": [
    {
      "name": "default",
      "level": "info",
      "enabled": true,
      "additivity": false,
      "appenders": [
        "consoleout"
      ]
    },
    {
      "name": "net_plugin_impl",
      "level": "debug",
      "enabled": true,
      "additivity": false,
      "appenders": [
        "consoleout"
      ]
    },
    {
      "name": "http_plugin",
      "level": "debug",
      "enabled": true,
      "additivity": false,
      "appenders": [
        "consoleout"
      ]
    },
    {
      "name": "producer_plugin",
      "level": "info",
      "enabled": true,
      "additivity": false,
      "appenders": [
        "consoleout"
      ]
    },
    {
      "name": "transaction_tracing",
      "level": "debug",
      "enabled": true,
      "additivity": false,
      "appenders": [
        "consoleout"
      ]
    },
    {
      "name": "transaction_failure_tracing",
      "level": "debug",
      "enabled": true,
      "additivity": false,
      "appenders": [
        "consoleout"
      ]
    },
    {
      "name": "trace_api",
      "level": "debug",
      "enabled": true,
      "additivity": false,
      "appenders": [
        "consoleout"
      ]
    }
  ]
}
```

## Troubleshooting

- **Error:** `tail -f nodeop.log` shows nothing  
  **Likely Cause:** `logging.json` writes to stdout (`"stream": "std_out"`), but the script only redirects stderr (`2> logfile`).  
  **Fix:**  
  - Either change stream to `"std_error"` and keep `2>> logfile`
  - Or capture both streams:  

    ```bash
    $start_nodeop >> logfile 2>&1 &
    ```

---

- **Error:** Logs come in one big burst / `tail -f` lags  
  **Likely Cause:** stdout becomes block-buffered when it’s redirected to a file.  
  **Fix:**  
  - Run under `stdbuf` or use `tee`:  

    ```sh
    stdbuf -oL -eL $start_nodeop >> logfile 2>&1 &
    ```

    (line-buffers both streams)

---

- **Error:** New node exits immediately after startup banner  
  **Likely Cause:** Another `nodeop` already holds the HTTP/P2P ports.  
  **Fix:**  
  - Kill the old process:

    ```sh
    kill $(cat nodeop.pid)
    ```

- **Error:** JSON edits crash logging on launch  
  **Likely Cause:** Trailing commas, unknown keys, or mismatched appender names.  
  **Fix:**  
  - Validate the JSON:

    ```sh
    jq . logging.json
    ```

  - Make sure every logger’s `appenders` entry exists in the appenders array.
