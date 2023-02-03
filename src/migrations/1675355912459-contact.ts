import { MigrationInterface, QueryRunner } from "typeorm";

export class contact1675355912459 implements MigrationInterface {
    name = 'contact1675355912459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD "password" character varying NOT NULL`);
    }

}
