import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Product } from "./Product"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique:true,
        nullable:false
    })
    email:string

    @Column({
        nullable:false
    })
    name: string

    @Column({
        nullable: false
    })
    password:string


    @OneToMany(() => Product, (product) => product.user)
    products:Product[]
}
