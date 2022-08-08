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
