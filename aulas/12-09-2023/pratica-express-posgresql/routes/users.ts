import express from 'express';
import {createNewUser, getExistingUserById, updateExistingUserByEmail, deleteExistingUserByEmail} from '../controllers/UsersControllers'
import { Router } from 'express';

export function usersRoutes(){
    const router = Router();
    router.post('/',createNewUser);
    router.get('/:userId', getExistingUserById);
    router.patch('/', updateExistingUserByEmail);
    router.delete('/', deleteExistingUserByEmail)
    return router
}
