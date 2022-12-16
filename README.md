
启动Mysql Docker Service

```
docker run --name sso -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=db -p 3306:3306 -d mysql
```

启动PhoAdmin
```
docker run --name phpmyadmin -d --link sso -e PMA_HOST="sale" -p 8080:80 phpmyadmin/phpmyadmin
```