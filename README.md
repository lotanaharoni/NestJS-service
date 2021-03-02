# NestJS-service
NestJS service and Postgres database on Docker

## Introduction
The NestJS service for the imaginary API, including 2 end-points: 'addCustomer' and 'isCustomer'.

## Main choises
- I chose to run postgres in docker (and not to install it locally).
- I chose to create a class called 'CustomerEntity'. The class contains the customer's properties including an 'id', which is made automatically.
- I chose to define the 'addCustomer' function as @Post, and the 'isCustomer' function as @Get, depends on what their purpose is. Therefore,
  the 'addCustomer' function gets an object of type CustomerEntity and the 'isCustomer' function gets two params.
- I chose in the 'isCustomer' function to get values by 'Params' and not by 'Query Params'.

## Developing tools
- I'm developing on macOS 10.14.4.
- I used 'Postman' for sending requests and 'pgcli' for watching the db's values.

## Installed
- NPM
- Node.js v14.13.1
- NestJS
- Docker
- --
- Postman
- pgcli
- nodemon

## Start commands
Runs the program: <br>
`npm run d:up` <br>
`npm run start:watch`

## The Swagger

![image](https://user-images.githubusercontent.com/50168804/109670302-a71fb900-7b7b-11eb-8e29-5ff834e7ed6c.png)
