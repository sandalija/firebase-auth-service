## Build 

```bash
docker build -t sandalija/firebase-auth-service .
```
## Run

```bash
docker run -it --rm -p 8080:8080 -v $(pwd)/service-account:/service-account sandalija/firebase-auth-service
```

## Docker-compose
```yml
version: '3'
services:
  firebase-auth-service:
    build: .
    container_name: 'firebase-auth-service'
    restart: always
    ports:
      - 8080:8080
    volumes:
      - ./service-account:/service-account
```