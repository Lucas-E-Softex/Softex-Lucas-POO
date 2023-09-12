import express from 'express';
import {createNewUser, getExistingUserById} from '../controllers/UsersControllers'
import { Router } from 'express';

export function usersRoutes(){
    const router = Router();
    router.post('/',createNewUser);
    router.get('/:userId', getExistingUserById);

    return router
}
