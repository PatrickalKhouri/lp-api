import { DataSource } from "typeorm"

export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'lp',
    logging: false,
    synchronize: false,
    name: 'default',
    migrations: ['src/database/migrations*.ts'],
});

export default connectionSource