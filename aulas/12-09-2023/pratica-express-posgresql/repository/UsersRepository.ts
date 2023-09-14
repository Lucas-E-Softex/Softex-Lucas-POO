import { sequelize } from "../config/database";
import User from "../models/User";
import { Model, InferAttributes, InferCreationAttributes } from "sequelize";

interface IUser{
  firstName: string;
  secondName: string;
  password: string;
  email: string;
}

interface IUserCreation extends IUser{
  id: number;
}

export async function create(
  firstName: string,
  secondName: string,
  email: string,
  encryptedPassword: string
) {
  try {
    const newUser:User | null = await User.create({
      firstName: firstName,
      secondName: secondName,
      email: email,
      password: encryptedPassword,
    });
    return newUser;
  } catch (error) {
    return false;
  }
}

export async function getOneById(userId: number) {
  try {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    return false;
  }
}

export async function getOneByEmail(email: string) {
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if(user){
      return user;
    }
    throw "no user found"
  } catch (error) {
    return false;
  }
}

export async function updateUserByEmail(
  firstName: string,
  secondName: string,
  email: string
) {
  try {
    const foundUser = await User.findOne({
      where: {
        email: email,
      },
    });
    if(!foundUser){
      throw "Usuário não encontrado"
    }
    foundUser.firstName = firstName;
    foundUser.secondName = secondName;
    await foundUser.save();
    return foundUser;
  } catch (error) {
    throw "Usuário não encontrado";
  }
}

export async function deleteUserByEmail(email:string){
  try {
    await User.destroy({
      where: {
        email: email
      }
    })
    return true
  } catch (error) {
    throw "no user found"
  }
}
