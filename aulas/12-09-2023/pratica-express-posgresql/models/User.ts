import {sequelize} from '../config/database';
import { DataTypes } from 'sequelize';
import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';

class User extends Model{
    declare id:number;
    declare firstName: string;
    declare secondName: string;
    declare password: string;
    declare email: string;
}

User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      secondName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
      }
    },
    {
      tableName: 'users',
      sequelize, // passing the `sequelize` instance is required
    },
  );

  export default User

