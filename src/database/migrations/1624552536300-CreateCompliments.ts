import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1624552536300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //tabela de elogios
        await queryRunner.createTable(
            new Table({
                name:"compliments",//nome da tabela,
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                      name:"user_sender",
                      type:"uuid"  
                    },
                    {
                        name:"user_receiver",
                        type:"uuid"
                    },
                    {
                        name:"tag_id",
                        type:"uuid"
                    },
                    {
                        name:"message",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ],
                //para criar chaves estrangeiras 1ª forma
                foreignKeys:[
                    {
                        name:"FKUserSenderCompliments",
                        referencedTableName:"users",//tabela de referenciade onde vira o id,
                        referencedColumnNames:["id"],//representando id da tabela users
                        columnNames:["user_sender"],//qual coluna referenciar na tabela compliments
                        //quando houver alguma ação na tabela de origem "USERS" oque deve ocorrer na tabela compliments
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL",
                    },
                    {
                        name:"FKUSerReceiverCompliments",
                        referencedTableName:"users",//tabela de referenciade onde vira o id,
                        referencedColumnNames:["id"],//representando id da tabela users
                        columnNames:["user_receiver"],//qual coluna referenciar na tabela compliments
                        //quando houver alguma ação na tabela de origem "USERS" oque deve ocorrer na tabela compliments
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL",
                    },
                    {
                        name:"FKUserSenderCompliments",
                        referencedTableName:"tags",//tabela de referencia de onde vira o id,
                        referencedColumnNames:["id"],//representando id da tabela users
                        columnNames:["tag_id"],//qual coluna referenciar na tabela compliments
                        //quando houver alguma ação na tabela de origem "USERS" oque deve ocorrer na tabela compliments
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL",
                    }
                ]
            })
        )
 //2ª forma
    //   await queryRunner.createForeignKey(
    //       "compliments",
    //       new TableForeignKey({
    //         name:"FK_user_compliments",
    //         referencedTableName:"users",//tabela de referenciade onde vira o id,
    //         referencedColumnNames:["id"],//representando id da tabela users
    //         columnNames:["FK_user_compliments"],//qual coluna referenciar na tabela compliments
    //         //quando houver alguma ação na tabela de origem "USERS" oque deve ocorrer na tabela compliments
    //         onDelete:"SET NULL",
    //         onUpdate:"SET NULL",
    //       })
    //   )  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}


/*
    diferença entre as duas formas de criar a foreikeys:
    quanto criado a foreikey dentro do CreateTable não é necessário utilizar 
    o nome da tabela, também se em algum momento fosse removido a migration da tabela, a foreikey tbm seria 
    removida.

    da 2ª forma se precisar remover as migration precisaria no metodo Down tbm remover as foreikeys.

*/