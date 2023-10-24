import { UserService } from "../service/user.service";
import { Request, Response } from "express";
import { IError, CustomError } from "../interfaces/IError";
import { UserDTO } from "../dto/user.dto";
import { IRoute } from "../misc/router.abstract";
export class UserController{
    static instance:UserController;
    static userService:UserService;

    public constructor(){
        UserController.userService = UserService.getInstance();
    }

    private async createUser(req:Request, res:Response){
        try {
            const {email, name, password} = req.body;
            if(!email || !name || !password){
                console.log('entrou no if')
                throw new CustomError(400, "Email, nome ou password não informados");
            }
            await UserController.userService.createUser(email, name, password);
            return res.sendStatus(200);
        } catch (error:IError|any) {
            return res.status(error.statusCode).json({message: error.statusMessage});
        }
    }

    private async getUserByEmail(req:Request, res:Response){
        try {
            const {email} = req.body;
            if(!email){
                throw new CustomError(400, "Email não informados");
            }
            await UserController.userService.getUserByEmail(email);
            return res.sendStatus(200);
        } catch (error:IError|any) {
            return res.status(error.statusCode).json({message: error.statusMessage});
        }
    }

    private async updateUser(req:Request, res:Response){
        try {
            const {email, nome} = req.body;
            if(!email || !nome){
                throw new CustomError(400, "email ou usuario não informado")
            }
            UserController.userService.updateUser(email, nome)
            //await this.userService.updateUser()
        } catch (error) {
            return res.status(error.errorCode).json(error.errorMessage)
        }
    }
}