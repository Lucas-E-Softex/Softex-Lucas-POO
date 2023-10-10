import { User } from "../entity/User";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

export class UserRepository extends Repository<User>{
    private static instance:UserRepository;
    private constructor(){
        super(User, AppDataSource.manager)
    }

    public createUser(email:string, name:string, password:string){
        const newUser = new User();
        newUser.email = email;
        newUser.name = name;
        newUser.password = password;
    }

    public async getUserByEmail(email:string){
        const foundUser = await this.findOne({
            where:{
                email: email
            }
        })
        return foundUser;
    }

    public async updateUser(newUser:User){
        await this.save(newUser);
    }

    public async deleteUser(user:User){
        await this.delete(user);
    }

    static getInstance(){
        if(!UserRepository.instance){
            UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance;
    }
}