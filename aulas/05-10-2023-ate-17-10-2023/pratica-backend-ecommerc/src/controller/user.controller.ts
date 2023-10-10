import { UserService } from "../service/user.service";
import { Request, Response } from "express";
import { IError, CustomError } from "../interfaces/IError";
import { UserDTO } from "../dto/user.dto";
class UserController{
    private static instance:UserController;
    private userService:UserService;

    private constructor(){
        this.userService = UserService.getInstance();
    }

    public async createUser(req:Request, res:Response){
        try {
            const {email, name, password} = req.body;
            if(!email || !name || !password){
                throw new CustomError(400, "Email, nome ou password não informados");
            }
            await this.userService.createUser(email, name, password);
            return res.sendStatus(200);
        } catch (error:IError|any) {
            return res.status(error.statusCode).json({message: error.statusMessage});
        }
    }

    public async getUserByEmail(req:Request, res:Response){
        try {
            const {email} = req.body;
            if(!email){
                throw new CustomError(400, "Email não informados");
            }
            await this.userService.getUserByEmail(email);
            return res.sendStatus(200);
        } catch (error:IError|any) {
            return res.status(error.statusCode).json({message: error.statusMessage});
        }
    }

    public async updateUser(req:Request, res:Response){
        try {
            const {email, nome} = req.body;
            if(!email || !nome){
                throw new CustomError(400, "email ou usuario não informado")
            }
            this.userService.updateUser(email, nome)
            //await this.userService.updateUser()
        } catch (error) {
            return res.status(error.errorCode).json(error.errorMessage)
        }
    }
}