import { DataTypes, Model } from "sequelize";
import sequelize from "#root/db/database.js";

class User extends Model {

}

const model = User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(20),
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    firstName: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    middleName: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER
    },
    counrty: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hash_password: {
        type: DataTypes.STRING(255),
    }
}, {
    sequelize,
    timestamps: true
})

await model.sync();

export default model;