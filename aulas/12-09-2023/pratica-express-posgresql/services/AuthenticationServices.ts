import bcrypt from 'bcrypt';
import { Jwt } from 'jsonwebtoken';
import { getByEmail } from './UsersServices';

export async function loginService(email:string, password:string){
    try {
        const user = await getByEmail(email);
        if(user){
            const isValid = await bcrypt.compare(password, user.password);
            if(isValid){
                
            }
            throw "invalid password";
        }
        throw "no user found"
    } catch (error) {
        throw error
    }
}