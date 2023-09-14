import {
  create,
  getOneById,
  getOneByEmail,
  updateUserByEmail,
  deleteUserByEmail
} from "../repository/UsersRepository";

export async function createUser(
  firstName: string,
  secondName: string,
  email: string,
  password: string
) {
  try {
    if (!firstName || !secondName || !email || !password) {
      throw "Identificações necessárias";
    }
    const foundUser = await getOneByEmail(email);
    if (foundUser) {
      throw "Usuário já existe";
    }

    const createdUser = await create(firstName, secondName, email, password);
    return createdUser;
  } catch (error) {
    throw "Precisa de identificações";
  }
}

export async function getUserById(userId: number) {
  try {
    const foundUser = await getOneById(userId);
    return foundUser;
  } catch (error) {
    return false;
  }
}

export async function updateByEmail(
  firstName: string,
  secondName: string,
  email: string
) {
  try {
    const user = await updateUserByEmail(firstName, secondName, email);
    return user;
  } catch (error) {
    throw "User not found";
  }
}

export async function deleteByEmail(email:string){
  try {
    const wasDeleted = await deleteUserByEmail(email);
    if(wasDeleted){
      return true
    }
    throw "no user found";
  } catch (error) {
    throw "no user found";
  }
}
