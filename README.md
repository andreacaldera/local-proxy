```
openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes \
  -keyout example.key -out example.crt -extensions san -config \
  <(echo "[req]"; 
    echo distinguished_name=req; 
    echo "[san]"; 
    echo subjectAltName=DNS:localhost,DNS:localhost,IP:10.0.0.1
    ) \
  -subj "/CN=localhost"
```


chrome://flags/#allow-insecure-localhost
allow invalid certificates for resources loaded from localhost