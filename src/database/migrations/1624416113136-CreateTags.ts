import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTags1624416113136 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"tags",//nome da tabela
                columns:[//colunas da tabela
                   {
                       name:"id",
                       type:"uuid",
                       isPrimary:true
                   },
                   {
                       name:"name",
                       type:"varchar"
                   },
                   {
                       name:"created_at",
                       type:"timestamp",
                       default:"now()"
                   },
                   {
                       name:"updated_at",
                       type:"timestamp",
                       default:"now()"
                   }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tags")
    }

}
