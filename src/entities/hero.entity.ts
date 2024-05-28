import{ Column, Entity, PrimaryGeneratedColumn }from "typeorm"

@Entity({})
export class Hero{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    power:string

    @Column()
    comicHouse:string
}   



