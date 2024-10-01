import { Sequelize } from 'sequelize';
import pg from 'pg';

const sequelize = await new Sequelize(process.env.PG_DB, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    dialectModule: pg
});

export default sequelize;
