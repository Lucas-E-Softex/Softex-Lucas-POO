import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('database_softex', "postgres", "postgres", {
    dialect: 'postgres'
})

