## Build 

```bash
docker build -t sandalija/firebase-auth-service .
```
## Run

```bash
docker run -it --rm -p 8080:8080 -v $(pwd)/service-account:/service-account sandalija/firebase-auth-service
```

## Docker-compose