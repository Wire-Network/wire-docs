---
title: Nodeos Plugins
---

## Overview

Plugins extend the core functionality implemented in `nodeos`. Some plugins are mandatory, such as `chain_plugin`, `net_plugin`, and `producer_plugin`, which reflect the modular design of `nodeos`. The other plugins are optional as they provide nice to have features, but non-essential for the nodes operation.

For information on specific plugins, just select from the list below:

* [`blockvault_client_plugin`](blockvault-client-plugin.md)
* [`chain_api_plugin`](chain-api-plugin.md)
* [`chain_plugin`](chain-plugin.md)
* [`db_size_api_plugin`](db-size-api-plugin.md)
* [`history_api_plugin`](history-api-plugin.md)
* [`history_plugin`](history-plugin.md)
* [`http_client_plugin`](http-client-plugin.md)
* [`http_plugin`](http-plugin.md)
* [`login_plugin`](login-plugin.md)
* [`net_api_plugin`](net-api-plugin.md)
* [`net_plugin`](net-plugin.md)
* [`producer_plugin`](producer-plugin.md)
* [`state_history_plugin`](state-history-plugin.md)
* [`trace_api_plugin`](trace-api-plugin.md)
* [`txn_test_gen_plugin`](txn-test-gen-plugin.md)

::: note
| Plugins add incremental functionality to `nodeos`. Unlike runtime plugins, `nodeos` plugins are built at compile-time.

:::