import { DataTypes, Model } from "sequelize";
import { sequelize } from "../common/db";
import { User as Type } from "../types";

export class User extends Model<Type, Omit<Type, "id">> implements Type {
    declare readonly id: number;
    declare username: string;
    declare password: string;
    declare nickName: string;

    // timestamps!
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "用户名",
    },
    nickName: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "昵称",
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "密码",
    },
}, {
    sequelize: sequelize,
    charset: "utf8mb4",
    comment: "用户表",
});
