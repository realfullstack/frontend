# RealFullStack Frontend


## Quick Start

To quickly start with this project:

```bash

git clone git@github.com:realfullstack/frontend.git
cd frontend

# generate an .env configuration env variables
cp .env.sample .env

# install and run
npm install
npm run dev

```


## Building

For a local build, simply run `npm run build`.

For deploying and running the code in dev or prod environments, containers are needed.

```bash

docker buildx build \
    --tag builder \
    --target base \
    --file ./Build/release/frontend/Dockerfile .

docker buildx build \
    --tag realfullstack/frontend/main_dev:local \
    --target main_dev \
    --progress plain \
    --file ./Build/release/frontend/Dockerfile .

docker buildx build \
    --tag realfullstack/frontend/nginx:local \
    --target nginx \
    --progress plain \
    --file ./Build/release/frontend/Dockerfile .

```


# Swagger


```
npx swagger-typescript-api -p https://backend.local.realfullstack.com/swagger/?format=openapi -o src/core/utils/api/ -n types.ts --union-enums  --no-client   
```
