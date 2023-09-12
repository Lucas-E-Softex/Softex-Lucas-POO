import { Response, Request } from "express";
import express from 'express';
import { User } from "../models/User";

const router = express.Router();

router.get('/user/', async (req:Request, res:Response) => {
    const users = await User.findAll();

    return res.status(200).json(users)
})

router.post('/user/', async (req:Request, res:Response) => {
    const {firstName, lastName, email} = req.body;
    console.log(firstName)
    console.log(req)

    const user = await User.create({
        firstName:firstName,
        lastName:lastName,
        email: email
    });
    await user.save();

    return res.sendStatus(201);
})

export default router
