# apidoc-test

參考文章: https://medium.com/thinking-encode/apidoc-%E8%8F%9C%E9%B3%A5%E6%95%99%E5%AD%B8-6eb0207e26a3
官方範例: https://apidocjs.com/#example-basic

```bash
npm install -g apidoc
apidoc -i ./ -o ./apidoc

# 打開 apidoc 的 index.html 即可看到結果
```

## apidoc.json

- The file is optional (it depend on your template if the data is required).

官方範例

```json
{
  "name": "example",
  "version": "0.1.0",
  "description": "A basic apiDoc example"
}
```

## apidoc-xxx.js

- 各個 api 的檔案，名稱可以自己取
- 可以一個 api 一個檔案，apidoc 是讀整個資料夾

官方範例

```js
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
```

## Docker

- 參考官方 github: https://github.com/apidoc/apidoc#docker-image
- 此專案的 Dockerfile 是使用 nginx

.dockerignore

```.dockerignore
apidoc
```

Dockerfile

```Dockerfile
# ---------- BUild -------------
FROM node:lts as build-stage

WORKDIR /app

COPY ./ /app

RUN npm install -g apidoc && \
    apidoc -i /app -o /app/apidoc

# ---------- Production -------------
FROM nginx:alpine

COPY --from=build-stage /app/apidoc /usr/share/nginx/html

EXPOSE 80
```
