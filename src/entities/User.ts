import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")/*colocar aqui qual tabela esta sendo referenciada | não esquecer de descomentar no tsconfig o experimentalDecorators
e  o emitDecoratorMetadata tbm o strictPropertyInitialization alterando o valor p/ false*/
class User {
    @PrimaryColumn()
    readonly id: string;
  
    @Column()
    name: string;
  
    @Column()
    email: string;
  
    @Column()
    admin: boolean;
    @Exclude()//evitando que as senhas sejam exibidas nas requests
    @Column()//inserindo mais um valor a entidade users
    password:string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
}

export { User }
