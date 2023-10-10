import { UserRepository } from "../repository/userRepository";
import bcrypt from 'bcrypt'

export class UserService{
    private static instance:UserService;
    private userRepository:UserRepository;

    public constructor(){
        this.userRepository = UserRepository.getInstance();
    }


    public async createUser(email:string, name:string, password:string){
        try {
            const foundUser = await this.userRepository.getUserByEmail(email);
            if(foundUser){
                throw new Error("Usuário já existe com esse email")
            }
            const hashedPassword:string = await bcrypt.hash(password, 10);
            this.userRepository.createUser(email, name, hashedPassword);
        } catch (error) {
            throw error;
        }
    }

    public async getUserByEmail(email:string){
        try {
            const foundUser = await this.userRepository.getUserByEmail(email);
            if(!foundUser){
                throw new Error("Usuário não encontrado")
            }
            return foundUser;
        } catch (error) {
            throw error;
        }
    }

    public async updateUser(newUser:User){
        try {
            const foundUser = await this.userRepository.getUserByEmail(email);
            if(foundUser){
                throw new Error("Usuário já existe com esse email")
            }
            const hashedPassword:string = await bcrypt.hash(password, 10);
            this.userRepository.createUser(email, name, hashedPassword);
        } catch (error) {
            throw error;
        }
    }

    public async deleteUser(user:User){
        await this.delete(user);
    }

    public getInstance(){
        if(!UserService.instance){
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
}