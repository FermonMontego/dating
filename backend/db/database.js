import { Sequelize } from 'sequelize';

const sequelize = await new Sequelize(process.env.PG_DB, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres'
});

export default sequelize;
