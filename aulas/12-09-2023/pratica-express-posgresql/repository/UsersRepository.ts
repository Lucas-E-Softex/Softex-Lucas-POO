import { sequelize } from "../config/database";
import { User } from "../models/User";
import bcrypt from "bcrypt";

export async function create(
  firstName: string,
  secondName: string,
  email: string,
  password: string
) {
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
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
  
      return user;
    } catch (error) {
      return false;
    }
  }
