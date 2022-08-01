# backend-cohort6

npm init

npm install --save sequelize
npm install --save mysql2
npm install --save sequelize-cli
npm install --save express

Help command
npx sequelize


npx sequelize init -> config, models, migrations, seeders

npx sequelize db:create ---> database created

npx sequelize model:generate --name User --attributes name:text,role:text,email:text
npx sequelize model:generate --name Post --attributes userId:integer,content:text


// view template engine
 npm install pug --save