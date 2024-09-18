---
title: Third-Party Logging And Tracing Integration
---

## Overview

To stay informed about the overall and detailed performance of your EOSIO-based blockchain node(s), you can make use of the telemetry tools available. SYSIO offers integration with two such telemetry tools:

* [Deep-mind logger](deep-mind-logger.md)
<!-- * Zipkin tracer -->

## Performance Considerations

Many wise people already said it, everything comes with a price. The telemetry tools, when activated, will have a certain impact on your `nodeop` performance which depends on various factors, but nevertheless the performance will be impacted; therefore, it is recommended you use them wisely in those situations when you really need the extra detailed information they provide, and then you turn them off.
