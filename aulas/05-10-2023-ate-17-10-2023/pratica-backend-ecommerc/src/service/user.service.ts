import { UserRepository } from "../repository/user.repository";
import bcrypt from 'bcrypt'
import { User } from "../entity/User";
import { UserDTO } from "../dto/user.dto";

export class UserService{
    private static instance:UserService;
    private userRepository:UserRepository;

    private constructor(){
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

    public async updateUser(email, name){
        try {
            const foundUser = await this.userRepository.getUserByEmail(email);
            if(!foundUser){
                throw new Error("Usuário não encontrado")
            }
            foundUser.email = email;
            foundUser.name = name;

            this.userRepository.updateUser(foundUser);
        } catch (error) {
            throw error;
        }
    }

    public async deleteUser(user:User){
        try {
            const foundUser = await this.userRepository.getUserByEmail(user.email);
            if(!foundUser){
                throw new Error('Usuário não existe');
            }
            await this.userRepository.deleteUser(user);
        } catch (error) {
            throw error
        }
    }

    static getInstance(){
        if(!UserService.instance){
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
}