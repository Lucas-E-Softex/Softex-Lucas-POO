import { UserController } from "../controller/user.controller";
import { RouterImplementation } from "../misc/router.abstract";

const userController = new UserController()
export const userControllerObject = new RouterImplementation([
    {
        route:'/',
        method: 'GET',
        controller: userController.getUserByEmail
    },
    {
        route: '/',
        method: 'POST',
        controller: userController.createUser
    }
])