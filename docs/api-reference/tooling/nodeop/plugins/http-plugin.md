## Description

The `http_plugin` is a core plugin supported by both `nodeop` and `kiod`. The plugin is required to enable any RPC API functionality provided by a `nodeop` or `kiod` instance.

## Usage

```console
# config.ini
plugin = sysio::http_plugin
[options]
```

```sh
# command-line
nodeop ... --plugin sysio::http_plugin [options]
 (or))
kiod ... --plugin sysio::http_plugin [options]
```

## Options

These can be specified from both the command-line or the `config.ini` file:

```console
Config Options for sysio::http_plugin:
  --unix-socket-path arg                The filename (relative to data-dir) to
                                        create a unix socket for HTTP RPC; set
                                        blank to disable.
  --http-server-address arg (=127.0.0.1:8888)
                                        The local IP and port to listen for
                                        incoming http connections; set blank to
                                        disable.
  --access-control-allow-origin arg     Specify the Access-Control-Allow-Origin
                                        to be returned on each request
  --access-control-allow-headers arg    Specify the Access-Control-Allow-Header
                                        s to be returned on each request
  --access-control-max-age arg          Specify the Access-Control-Max-Age to
                                        be returned on each request.
  --access-control-allow-credentials    Specify if Access-Control-Allow-Credent
                                        ials: true should be returned on each
                                        request.
  --max-body-size arg (=2097152)        The maximum body size in bytes allowed
                                        for incoming RPC requests
  --http-max-bytes-in-flight-mb arg (=500)
                                        Maximum size in megabytes http_plugin
                                        should use for processing http
                                        requests. -1 for unlimited. 429 error
                                        response when exceeded.
  --http-max-in-flight-requests arg (=-1)
                                        Maximum number of requests http_plugin
                                        should use for processing http
                                        requests. 429 error response when
                                        exceeded.
  --http-max-response-time-ms arg (=30) Maximum time for processing a request,
                                        -1 for unlimited
  --verbose-http-errors                 Append the error log to HTTP responses
  --http-validate-host arg (=1)         If set to false, then any incoming
                                        "Host" header is considered valid
  --http-alias arg                      Additionaly acceptable values for the
                                        "Host" header of incoming HTTP
                                        requests, can be specified multiple
                                        times.  Includes http/s_server_address
                                        by default.
  --http-threads arg (=2)               Number of worker threads in http thread
                                        pool
  --http-keep-alive arg (=1)            If set to false, do not keep HTTP
                                        connections alive, even if client
                                        requests.
```

## Dependencies

None
