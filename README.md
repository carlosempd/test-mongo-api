# API built with NestJS, MongoDB and Mongoose

## Description

This is a [Nest](https://github.com/nestjs/nest) application that serves endpoints to create,
list and update user. Also it provides an endpoint to login with the users created.

A Bearer token will be needed to list and update users.

All the code and functionality exist in the develop branch, so be sure to checkout to that branch.

This app uses docker containers, so make sure to run the docker daemon.

After running the app, open the browser with **http://localhost:3000/api** and you will see the available endpoits documentation generated with Swagger.

Here is a list of the endponts:
| endpoint | method | descripción |
| --- | --- | --- |
| /users | GET | List all users (requires authentication header with 'Bearer token') |
/users | POST | create a new user (if test from postman, use body as form-data, not as x-www-form-urlencoded) |
/users/:id | PUT | Update user (if test from postman, use body as form-data, not as x-www-form-urlencoded). Requires authentication as the list users endpoint | 
/auth/login | POST | Login with one of the creted users | 

## Clone the repo

```bash
$ git clone https://github.com/carlosempd/test-mongo-api.git
```

## Configuration to run locally
Create a **.env** file using the same format provided in **.env.example** file. Make sure to configure all the variables in order to run the app succesfully.

You will need a mongoDB instance, in this case it is provided within a docker container specified in the **docker-compose.yaml** file.
Note there is also configured a mongo express service, this is just to watch the data in the database so it is not required. 
If you wish, remove mongo express service.

To start the database instance, run the following command
```bash
$ docker compose up
```

## Running the app

After starting the database, run the app with any of the following commands

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker Image

 If you want to run this app only using the image generated from Dockerfile, check the dockerhub image
 [here](https://hub.docker.com/r/carlosempd/test-nestjs-api).

 It has the documentation to mount this image in a container and run it.
As you will see, in this case you will only need two files to run the app:
- **.env**
- **docker-compose.yaml**
