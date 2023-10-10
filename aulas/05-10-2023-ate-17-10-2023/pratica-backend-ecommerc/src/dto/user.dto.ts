import { User } from "../entity/User";
export class UserDTO{
    id: number;
    email:string;
    name:string;
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