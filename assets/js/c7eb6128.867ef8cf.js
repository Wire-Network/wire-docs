"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[9557],{43979:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-2.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.0","info":{"title":"Net API","version":"1.0.0","license":{"name":"MIT","url":"https://opensource.org/licenses/MIT"},"contact":{"url":"https://eos.io"}},"servers":[{"url":"{protocol}://{host}:{port}/v1/","variables":{"protocol":{"enum":["http","https"],"default":"http"},"host":{"default":"localhost"},"port":{"default":"8080"}}}],"components":{"schemas":{}},"paths":{"/net/connections":{"post":{"summary":"connections","description":"Returns an array of all peer connection statuses.","operationId":"connections","parameters":[],"requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{}}}}},"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"peer":{"description":"The IP address or URL of the peer","type":"string"},"connecting":{"description":"True if the peer is connecting, otherwise false","type":"boolean"},"syncing":{"description":"True if the peer is syncing, otherwise false","type":"boolean"},"last_handshake":{"description":"Structure holding detailed information about the connection","type":"object","properties":{"network_version":{"description":"Incremental value above a computed base","type":"integer"},"chain_id":{"$ref":"#/paths/~1net~1status/post/responses/200/content/application~1json/schema/properties/last_handshake/properties/token"},"node_id":{"$ref":"#/paths/~1net~1status/post/responses/200/content/application~1json/schema/properties/last_handshake/properties/token"},"key":{"$ref":"#/paths/~1net~1status/post/responses/200/content/application~1json/schema/properties/last_handshake/properties/key"},"time":{"$ref":"#/paths/~1net~1status/post/responses/200/content/application~1json/schema/properties/last_handshake/properties/time"},"token":{"$ref":"#/paths/~1net~1status/post/responses/200/content/application~1json/schema/properties/last_handshake/properties/token"},"sig":{"$ref":"#/paths/~1net~1status/post/responses/200/content/application~1json/schema/properties/last_handshake/properties/sig"},"p2p_address":{"description":"IP address or URL of the peer","type":"string"},"last_irreversible_block_num":{"description":"Last irreversible block number","type":"integer"},"last_irreversible_block_id":{"$ref":"#/paths/~1net~1status/post/responses/200/content/application~1json/schema/properties/last_handshake/properties/token"},"head_num":{"description":"Head number","type":"integer"},"head_id":{"$ref":"#/paths/~1net~1status/post/responses/200/content/application~1json/schema/properties/last_handshake/properties/token"},"os":{"description":"Operating system name","type":"string"},"agent":{"description":"Agent name","type":"string"},"generation":{"description":"Generation number","type":"integer"}}}}}}}}}}}},"/net/connect":{"post":{"summary":"connect","description":"Initiate a connection to a specified peer.","operationId":"connect","parameters":[],"requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["endpoint"],"properties":{"endpoint":{"type":"string","description":"the endpoint to connect to expressed as either IP address or URL"}}}}}},"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"string","description":"\\"already connected\\" or \\"added connection\\""}}}}}}},"/net/disconnect":{"post":{"summary":"disconnect","description":"Initiate disconnection from a specified peer.","operationId":"disconnect","parameters":[],"requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["endpoint"],"properties":{"endpoint":{"type":"string","description":"the endpoint to disconnect from, expressed as either IP address or URL"}}}}}},"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"string","description":"\\"connection removed\\" or \\"no known connection for host\\""}}}}}}},"/net/status":{"post":{"summary":"status","description":"Retrieves the connection status for a specified peer.","operationId":"status","parameters":[],"requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["endpoint"],"properties":{"endpoint":{"type":"string","description":"the endpoint to get the status for, to expressed as either IP address or URL"}}}}}},"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"object","properties":{"peer":{"description":"The IP address or URL of the peer","type":"string"},"connecting":{"description":"True if the peer is connecting, otherwise false","type":"boolean"},"syncing":{"description":"True if the peer is syncing, otherwise false","type":"boolean"},"last_handshake":{"description":"Structure holding detailed information about the connection","type":"object","properties":{"network_version":{"description":"Incremental value above a computed base","type":"integer"},"chain_id":{"$ref":"#/paths/~1net~1status/post/responses/200/content/application~1json/schema/properties/last_handshake/properties/token"},"node_id":{"$ref":"#/paths/~1net~1status/post/responses/200/content/application~1json/schema/properties/last_handshake/properties/token"},"key":{"type":"string","description":"Base58 encoded SYSIO public key","pattern":"^(EOS|PUB_([RK]1|WA)_)[1-9A-HJ-NP-Za-km-z]+$","title":"PublicKey"},"time":{"type":"string","description":"Date/time string in the format YYYY-MM-DDTHH:MM:SS.sss","pattern":"^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}$","title":"DateTimeSeconds"},"token":{"type":"string","pattern":"^[0-9A-Fa-f]{64}$","title":"Sha256"},"sig":{"type":"string","description":"Base58 encoded SYSIO cryptographic signature","pattern":"^SIG_([RK]1|WA)_[1-9A-HJ-NP-Za-km-z]+$","title":"Signature"},"p2p_address":{"description":"IP address or URL of the peer","type":"string"},"last_irreversible_block_num":{"description":"Last irreversible block number","type":"integer"},"last_irreversible_block_id":{"$ref":"#/paths/~1net~1status/post/responses/200/content/application~1json/schema/properties/last_handshake/properties/token"},"head_num":{"description":"Head number","type":"integer"},"head_id":{"$ref":"#/paths/~1net~1status/post/responses/200/content/application~1json/schema/properties/last_handshake/properties/token"},"os":{"description":"Operating system name","type":"string"},"agent":{"description":"Agent name","type":"string"},"generation":{"description":"Generation number","type":"integer"}}}}}}}}}}}}}}')}}]);