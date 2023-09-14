import express from "express";
import { Request, Response } from "express";
import {
  createUser,
  getUserById,
  updateByEmail,
  deleteByEmail
} from "../services/UsersServices";
import User from "../models/User";

export async function createNewUser(req: Request, res: Response) {
  try {
    const { firstName, secondName, email, password } = req.body;
    console.log(req.body);
    const user = await createUser(firstName, secondName, email, password);
    if (user) {
      return res.sendStatus(201);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export async function getExistingUserById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const integerId = parseInt(userId);
    const foundUser = await getUserById(integerId);
    if (foundUser) {
      return res.status(200).json(foundUser);
    }
    throw "user not found"
  } catch (error) {
    return res.sendStatus(400);
  }
}

export async function updateExistingUserByEmail(
  req:Request, res:Response
){
  try {
    const {firstName, secondName, email} = req.body;
    const user : User = await updateByEmail(firstName, secondName, email);
    return res.status(200).json(user);
  } catch (error) {
    return res.sendStatus(400);
  }
}

export async function deleteExistingUserByEmail(req:Request, res:Response){
  try {
    const {email} = req.body;
    const wasDeleted = await deleteByEmail(email);
    if(wasDeleted){
      return res.sendStatus(200);
    }
    throw "no user found"
  } catch (error) {
    return res.sendStatus(404)
  }
}
