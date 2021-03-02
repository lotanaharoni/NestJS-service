# NestJS-service
NestJS service and Postgres database on Docker

# Content
- Dockerized the NestJS starter App.
- Add a docker-compose file and run also a postgres db
- Connect with NestJS to the db
- Post Data && Get Data over http

# You need
- NPM
- Node.js
- NestJS
- Docker

# Start command for docker-compose file
Builds, (re)creates, starts and attaches to conttainers for a service.
`docker-compose up`

# Start command for Docker
Build yout image:
`docker build <your path> -t <<user>/project-name>`

Run:
`docker run -p 8080:3000 <<user>/project-name>`

For Example:
`docker build <your path> -t lotan/nestjs-dockerized`
`docker run -p 8080:3000 lotan/nestjs-dockerized`
