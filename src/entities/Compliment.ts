import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Tag } from "./Tag";

import { User } from "./User";
@Entity("compliments")
class Compliment{
    @PrimaryColumn()
    readonly id:string;
    @Column()
    user_sender:string;
    @Column()
    user_receiver:string;
    @Column()
    tag_id:string;

            //criando relacionamento com a tabela tag campo id
            @JoinColumn({name:"user_sender"})
            @ManyToOne(() => User)
            userSender: User;

            //criando relacionamento com a tabela tag campo id
            @JoinColumn({name:"user_receiver"})
            @ManyToOne(() => User)
            userReceiver: User;

            //criando relacionamento com a tabela tag campo id
            @JoinColumn({name:"tag_id"})
            @ManyToOne(() => Tag) //relacionamento de muitos para um
            tag:Tag;

    @Column()
    message:String;
    @CreateDateColumn()
    created_at:Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export{ Compliment }