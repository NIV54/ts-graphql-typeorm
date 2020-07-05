@app
begin-app

@static

@http
get /playground

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
