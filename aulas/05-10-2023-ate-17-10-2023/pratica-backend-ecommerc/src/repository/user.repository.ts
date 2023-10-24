import { User } from "../entity/User";
import { Repository, getRepository } from "typeorm";
import { AppDataSource } from "../data-source";

export class UserRepository {
    private static instance: UserRepository;
    private repository: Repository<User>;

    private constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    public static getInstance() {
        if (!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance;
    }

    public async createUser(email: string, name: string, password: string) {
        try {
            const newUser = new User();
            newUser.email = email;
            newUser.name = name;
            newUser.password = password;
            await this.repository.save(newUser);
            return true
        } catch (error) {
            throw error
        }
    }

    public async getUserByEmail(email: string) {
        const foundUser = await this.repository.findOne({
            where: {
                email: email
            }
        });
        return foundUser;
    }

    public async updateUser(newUser: User) {
        await this.repository.save(newUser);
    }

    public async deleteUser(user: User) {
        await this.repository.remove(user);
    }
}
