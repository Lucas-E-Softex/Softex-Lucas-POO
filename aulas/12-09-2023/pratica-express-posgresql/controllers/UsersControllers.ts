import express from "express";
import { Request, Response } from "express";
import { createUser, getUserById } from "../services/UsersServices";

export async function createNewUser(req: Request, res: Response) {
  try {
    const { firstName, secondName, email, password } = req.body;
    console.log(req.body)
    const user = await createUser(firstName, secondName, email, password);
    if (user) {
      return res.sendStatus(201);
    }
  } catch (error) {
    console.log(error)
    return res.sendStatus(400);
  }
}

export async function getExistingUserById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const integerId = parseInt(userId);
    const foundUser = await getUserById(integerId);
    if(foundUser){
        return res.sendStatus(200);
    }
  } catch (error) {
    return res.sendStatus(400);
  }
}
