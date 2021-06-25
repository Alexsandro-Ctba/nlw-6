import {MigrationInterface, QueryRunner, TableColumn } from "typeorm";
//alterando estrutura da tabela users
export class AlterUserAddPassword1624546198536 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn(
                {               
                    name:"password",
                    type:"varchar",
                    isNullable:true, //caso a tabela tiver registros
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password")
    }

}
