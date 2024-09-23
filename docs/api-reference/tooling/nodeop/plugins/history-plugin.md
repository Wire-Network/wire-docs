:::warning
| The `history_plugin` is deprecated and will no longer be maintained. Please use the [`state_history_plugin`](state-history-plugin.md) or the [`trace_api_plugin`](trace-api-plugin.md) instead.
:::

## Description

The `history_plugin` provides a cache layer to obtain historical data about the blockchain objects. It depends on [`chain_plugin`](chain-plugin.md) for the data.

## Usage

```console
# config.ini
plugin = sysio::history_plugin
[options]
```

```sh
# command-line
nodeop ... --plugin sysio::history_plugin [options]
```

## Options

These can be specified from both the `nodeop` command-line or the `config.ini` file:

```console
Config Options for sysio::history_plugin:
  -f [ --filter-on ] arg                Track actions which match 
                                        receiver:action:actor. Actor may be 
                                        blank to include all. Action and Actor 
                                        both blank allows all from Recieiver. 
                                        Receiver may not be blank.
  -F [ --filter-out ] arg               Do not track actions which match 
                                        receiver:action:actor. Action and Actor
                                        both blank excludes all from Reciever. 
                                        Actor blank excludes all from 
                                        reciever:action. Receiver may not be 
                                        blank.
```

## Dependencies

* [`chain_plugin`](chain-plugin.md)
