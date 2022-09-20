## Vesatogo CMS

This project houses all the data to make server driven webpages in vesatogo products.

### Installation Guide

1. `yarn install` - to install the dependencies
2. `docker-compose up -f dev-compose.yml -d` - **Only** if you plan on using a local database via docker
3. `cp .env.example .env` and populate the `.env` file with appropriate values
4. `yarn dev` to spin up a local development server

### Dockerize the application

1. `docker build . -t vesatogo-cms` - will build a docker image tagged `vesatogo-cms:latest`

### Run the application completely on docker

1. `docker-compose up`
