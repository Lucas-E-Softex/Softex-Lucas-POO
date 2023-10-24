import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nome:string

    @Column()
    preco:number

    @Column()
    descricao:string

    @ManyToOne(() => User, user => user.products)
    user:User
}