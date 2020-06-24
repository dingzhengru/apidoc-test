# ---------- BUild -------------
FROM node:lts as build-stage

WORKDIR /app

COPY ./ /app

RUN npm install -g apidoc && \
    apidoc -i /app -o /app/apidoc && \
    ls /app/apidoc

# ---------- Production -------------
FROM nginx:alpine

COPY --from=build-stage /app/apidoc /usr/share/nginx/html

EXPOSE 80