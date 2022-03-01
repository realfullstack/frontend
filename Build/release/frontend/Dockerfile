### base
FROM node:14.15.4-alpine3.12 as base

RUN mkdir /app

WORKDIR /app

COPY ./package* /app

RUN npm ci
### base DONE

### main_dev
FROM base as main_dev

COPY ./ /app

RUN npm run build

USER node
### main_dev DONE


### nginx
FROM nginx:1.19.6-alpine as nginx
RUN mkdir /app
COPY ./Build/release/frontend/conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=main_dev /app/.next/static /app/_next/static
### nginx DONE