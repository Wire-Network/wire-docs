
## Description

The `producer_plugin` loads functionality required for a node to produce blocks.

:::info
| Additional configuration is required to produce blocks. Please read [Configuring Block Producing Node](../usage/node-setups/producing-node.md).
:::

## Usage

```console
# config.ini
plugin = sysio::producer_plugin [options]
```

```sh
# nodeop startup params
nodeop ... -- plugin sysio::producer_plugin [options]
```

## Options

These can be specified from both the `nodeop` command-line or the `config.ini` file:

```console
Config Options for sysio::producer_plugin:

  -e [ --enable-stale-production ]      Enable block production, even if the 
                                        chain is stale.
  -x [ --pause-on-startup ]             Start this node in a state where 
                                        production is paused
  --max-transaction-time arg (=499)     Setting this value (in milliseconds)
                                        will restrict the allowed transaction
                                        execution time to a value potentially
                                        lower than the on-chain consensus
                                        max_transaction_cpu_usage value.
  --max-irreversible-block-age arg (=-1)
                                        Limits the maximum age (in seconds) of 
                                        the DPOS Irreversible Block for a chain
                                        this node will produce blocks on (use 
                                        negative value to indicate unlimited)
  -p [ --producer-name ] arg            ID of producer controlled by this node 
                                        (e.g. inita; may specify multiple 
                                        times)
  --signature-provider arg (=SYS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3)
                                        Key=Value pairs in the form 
                                        <public-key>=<provider-spec>
                                        Where:
                                           <public-key>    is a string form of 
                                                           a vaild public
                                                           key
                                        
                                           <provider-spec> is a string in the 
                                                           form <provider-type>
                                                           :<data>
                                        
                                           <provider-type> is KEY, KIOD, or SE
                                        
                                           KEY:<data>      is a string form of 
                                                           a valid  
                                                           private key which 
                                                           maps to the provided
                                                           public key
                                        
                                           KIOD:<data>    is the URL where 
                                                           kiod is available 
                                                           and the approptiate 
                                                           wallet(s) are 
                                                           unlocked
                                        
                                           SE:             indicates the key 
                                                           resides in Secure 
                                                           Enclave
  --greylist-account arg                account that can not access to extended
                                        CPU/NET virtual resources
  --greylist-limit arg (=1000)          Limit (between 1 and 1000) on the 
                                        multiple that CPU/NET virtual resources
                                        can extend during low usage (only 
                                        enforced subjectively; use 1000 to not 
                                        enforce any limit)
  --produce-block-offset-ms arg (=450)  The minimum time to reserve at the end
                                        of a production round for blocks to 
                                        propagate to the next block producer.
  --max-block-cpu-usage-threshold-us arg (=5000)
                                        Threshold of CPU block production to 
                                        consider block full; when within 
                                        threshold of max-block-cpu-usage block 
                                        can be produced immediately
  --max-block-net-usage-threshold-bytes arg (=1024)
                                        Threshold of NET block production to 
                                        consider block full; when within 
                                        threshold of max-block-net-usage block 
                                        can be produced immediately
  --subjective-cpu-leeway-us arg (=31000)
                                        Time in microseconds allowed for a 
                                        transaction that starts with 
                                        insufficient CPU quota to complete and 
                                        cover its CPU usage.
  --incoming-transaction-queue-size-mb arg (=1024)
                                        Maximum size (in MiB) of the incoming 
                                        transaction queue. Exceeding this value
                                        will subjectively drop transaction with
                                        resource exhaustion.
  --producer-threads arg (=2)           Number of worker threads in producer 
                                        thread pool
  --snapshots-dir arg (="snapshots")    the location of the snapshots directory
                                        (absolute path or relative to 
                                        application data dir)
```

## Dependencies

* [`chain_plugin`](chain-plugin.md)

### Load Dependency Examples

```console
# config.ini
plugin = sysio::chain_plugin [operations] [options]
```

```sh
# command-line
nodeop ... --plugin sysio::chain_plugin [operations] [options]
```

For details about how blocks are produced please read the following [block producing explainer](block-producing-explained.md).
