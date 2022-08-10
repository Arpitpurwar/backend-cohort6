1. npm init
2. npm install express, sequelize, dotenv, mysql2, body-parser --save

3. npm install sequelize-cli

4. npx sequqlize init

5. npx sequelize db:create
6. npx sequelize model:generate --name Categories --attributes name:text,description:text

Post API:
localhost:2500/ecomm/api/v1/categories
{
"description":"about Fashion",
"name" :"Fashion"
}

GET API:
localhost:2500/ecomm/api/v1/categories
localhost:2500/ecomm/api/v1/categories/1

PUT API:
localhost:2500/ecomm/api/v1/categories/1
{
"name" : "bank",
"description":"about bank & payment"
}

DELETE API:
localhost:2500/ecomm/api/v1/categories/1

Products:
npx sequelize model:generate --name Products --attributes name:text,cost:integer,description:text,quantity:integer

POST API
localhost:2500/ecomm/api/v1/products

{
"description":"For men",
"name" :"summer shirts",
"cost": 870,
"quantity": 20
}

GET API
http://localhost:2500/ecomm/api/v1/products

GET API based on product ID
http://localhost:2500/ecomm/api/v1/products/1

Update API/ PUT
localhost:2500/ecomm/api/v1/products/2

{
"name" : "bank",
"description":"about bank & payment",
"quantity": 24,
"cost": 450
}

DELETE API:
localhost:2500/ecomm/api/v1/products/2

/// Revision Class
mkdir revision
npm init

npm i express sequelize sequelize-cli mysql2
npm i nodemon

npx sequelize init

npx sequelize model:generate --name Companies --attributes name:text

npx sequelize model:generate --name Users --attributes name:text

npx sequelize db:migrate

npx sequelize seed:generate --name add-companies
npx sequelize seed:generate --name add-users
