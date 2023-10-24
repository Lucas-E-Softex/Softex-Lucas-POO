import { User } from "../entity/User";
import { IsEmail, IsString, IsArray} from "class-validator";
import { Expose, Type } from "class-transformer";
export class UserDTO{
    
    @IsString()
    @Expose()
    id: number;

    @IsEmail()
    @Expose()
    email:string;

    @IsString()
    @Expose()
    name:string;

    @Expose()
    @IsArray()
    @Type(() => ProductDTO)
    products: Array<ProductDTO>;

    construcor(){
        
    }

    constructor(id, email, name, products){
        this.id = id;
        this.email = email;
        this.name = name;
        this.products = products
    }
    public of(prevUser:User){
        if(!prevUser){
            prevUser = new User();
        }

        if(prevUser.email){
            this.email = prevUser.email;
        }else{
            this.email = ''
        }

        if(prevUser.name){
            this.name = prevUser.name
        }else{
            this.name = ''
        }
    }
}