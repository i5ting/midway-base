# midway quick guide sample

## Usage

```bash
$ npm i
$ npm run dev
$ npm run test
```


## User


```
curl http://localhost:7002/users/


HTTP/1.1 200 OK
Vary: Origin
Content-Range: users 0-10/7
Access-Control-Expose-Headers: X-Total-Count
X-Total-Count: 7
Content-Type: application/json; charset=utf-8
set-cookie: locale=en-us; path=/; max-age=31557600; expires=Fri, 12 Apr 2024 07:51:37 GMT
Content-Length: 2346
Date: Thu, 13 Apr 2023 01:51:37 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```


create

```
curl -X POST http://localhost:7002/users/ -H 'Content-Type: application/json; charset=UTF-8' -d '{"name":"alfred","password":"123456","avatar":"avatar","description":"description"}'

{"name":"alfred","description":"description","password":"123456","language":"zh","avatar":"avatar","created_at":"2023-04-13 02:19:17","updated_at":"2023-04-13 02:19:10","accessToken":null,"refreshToken":null,"scope":null,"token_type":null,"id_token":null,"expire_date":null,"id":8,"time_zone":"Asia/Shanghai"}%
```



curl -X POST http://localhost:7003/posts/ -H 'Content-Type: application/json; charset=UTF-8' -d '{"title":"test1","body":"127.0.0.1","userId":1}'
