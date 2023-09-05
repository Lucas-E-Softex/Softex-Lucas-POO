import { Model } from "sequelize";
import { DataTypes } from "sequelize";
import { sequelize } from "./config";

export const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      email:{
        type:DataTypes.STRING
      }
})