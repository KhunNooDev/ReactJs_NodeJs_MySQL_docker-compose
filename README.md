# REACT-NODEJS-MYSQL-DOCKER

## Starter Project

[Docker compose : NodeJS and MySQL app with React in a docker](http://www.bogotobogo.com/DevOps/Docker/Docker-React-Node-MySQL-App.php)

## Before start editing the code

```
$ cd client
$ yarn install
```

```
$ cd server
$ yarn install
```

## Commands docker-compose

```
$ docker-compose build --no-cache
$ docker-compose up -d
$ docker-compose ps
$ docker-compose down
```

## Live Docker Logs

```
$ docker-compose logs --tail=[number] -f [container]
```

## .env file example

```
MYSQL_USER=sampleuser
MYSQL_PASSWORD=samplepassword
MYSQL_DATABASE=sampledb

MYSQL_HOST=localhost
MYSQL_ROOT_PASSWORD=root
```


