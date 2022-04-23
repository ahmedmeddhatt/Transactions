# mean


# Easycash : Transactions Project

## Contents:

1-Description.

2-Project build depended on.

3-Project Structure.

4-Functionality and Endpoints.

5-Development.

## Description

This is a backend API build in Nodejs for an online transactions. It exposes a RESTful API that will be used by the frontend developer on the frontend.


## Project build depended on

- The language used and application logic

1. [TypeScript] (https://www.typescriptlang.org/docs/)
2. [Node.JS] (https://nodejs.org/dist/latest-v16.x/docs/api/)
3. [Express] (https://expressjs.com/)

- For managing environment variables

1. [dotenv] (https://www.npmjs.com/package/dotenv)

- For the database and migration

1. [pg] (https://node-postgres.com/)
2. [db-migrate] (https://db-migrate.readthedocs.io/en/latest/)
3. [db-migrate-pg] (https://www.npmjs.com/package/db-migrate-pg)

- For security

1. [morgan] (https://www.npmjs.com/package/morgan)
2. [helmet] (https://www.npmjs.com/package/helmet)

- For Fixing and Formatting Code

1. [ESLint] (https://eslint.org/docs/user-guide/getting-started)
2. [Prettier] (https://prettier.io/docs/en/index.html)


## Project Structure

```

node_modules

src
    controller/
        controller.ts
        
    database/
       database_config.ts
       seq_config.ts
       
    middleware/
        error_middleware.ts
        
    model/
        index.ts
        seller.model.ts
        transaction.model.ts
        
    routes/
        routes.ts
        routes.index.ts

 - index.ts
.gitignore
.eslintrc.js
.prettierignore
.prettierrrc
database.json
package-lock.json
package.json
README.md
tsconfig.json

```



### Enviromental Variables Set up

Bellow are the environmental variables that needs to be set in a `.env` file. This is the default setting that I used for development, but you can change it to what works for you.

**NB:** The given values are used in developement and testing but not in production.

```
PORT=3000
NODE_ENV= dev
DB_HOST: 'localhost',
DB_USER: 'root',
DB_PASSWORD: 'password',
DB: 'products'

```

### NPM Scripts

to build the project and use it do the following orders in terminal:

- To install required packages: `npm install`

- To build typescript: `npm run build`

- to start project development: `npm run dev`

- to run and start the project: `npm run start`

- to run Prettier and ESLint: `npm run format`

## Functionality and Endpoints

- Homepage Endpoint
  `http://localhost:3000/`
  
-Get Seller Transactions With Id
http://localhost:3000/api/seller/transactions/6


Get All Transactions
http://localhost:3000/api/seller/transactions/6/2022-04-22


## Development:

- Ahmed Medhat
