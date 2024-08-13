# Frontend Application Docker Guide

Dockerfile and .dockerignore is already in the project.

STEP

1. clone the project
   https://github.com/zyllar68/fontend-challenge.git

```bash
git clone https://github.com/zyllar68/fontend-challenge.git
```

2. install all dependencies

```bash
npm i
```

3. build the docker image
   docker build -t <docker-image> .

```bash
docker build -t frontend-app .
```

4. run the docker project
   docker run -p 3000:<port> <docker-image>

```bash
ndocker run -p 3000:3000 frontend-app
```

4.1 for development purposes you can run for hot reload
docker-composer.yml is also in the project

```bash
docker compose up
```

Congrats!
your app will run in this port!
http://localhost:3000/
