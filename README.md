# NestJS-service
NestJS service and Postgres database on Docker-compose

## Introduction
The NestJS service for the imaginary API, including 2 end-points: 'addCustomer' and 'isCustomer'.

## Main choices
- I chose to run postgres in docker-compose (and not to install it locally).
- I chose to create a class called 'CustomerEntity'. The class contains the customer's properties including an 'id', which is made automatically.
- I chose to define the 'addCustomer' function as @Post, and the 'isCustomer' function as @Get, depends on what their purpose is. Therefore,
  the 'addCustomer' function gets an object of type CustomerEntity and the 'isCustomer' function gets two params.
- I chose in the 'isCustomer' function to get values by 'Params' and not by 'Query Params'.

## Developing tools
- I'm developing on macOS 10.14.4.
- I used 'Postman' for sending requests and 'pgcli' for watching the db's values.

## Installed
- npm v6.14.9
- Node.js v14.13.1
- NestJS v7.5.6
- Docker v20.10.2
- --
- Postman v7.36.1
- pgcli v3.1.0

## Start commands
Runs the program: <br>
`npm install` - install all modules listed as dependencies in package.json<br>
`npm run d:up` - runs the command 'docker-compose up'<br>
`npm run start:watch`- Execute several tasks. Watch the 'src' file and for every change will compile the code.<br>
Furthermore, creates the connection with the db <br>
<br>
## The Swagger

![image](https://user-images.githubusercontent.com/50168804/109670302-a71fb900-7b7b-11eb-8e29-5ff834e7ed6c.png) <br> <br> <br>
![image](https://user-images.githubusercontent.com/50168804/109706163-460adc00-7ba1-11eb-9220-3f73ef0047ed.png) <br> <br> <br>
![image](https://user-images.githubusercontent.com/50168804/109706260-663a9b00-7ba1-11eb-9993-4ecdd14fbbb8.png) <br> <br> <br>
![image](https://user-images.githubusercontent.com/50168804/109706320-78b4d480-7ba1-11eb-9fb4-5e5a69280570.png)



