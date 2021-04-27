# generate model
- npx sequelize-cli model:generate --name Doctor --attributes firstName:string,lastName:string,email:string,speciality:string

- npx sequelize-cli db:migrate
