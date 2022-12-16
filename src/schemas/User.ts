import { DataTypes, Model } from "sequelize";
import { sequelize } from "../common/db";
import { User as Type } from "../types";

export class User extends Model<Type, Omit<Type, "id">> implements Type {
    declare readonly id: number;
    declare username: string;
    declare nickName: string;
    declare avatar: string;
    declare gender: string;
    declare signature: string;
    declare birthday: Date;
    declare mobile?: string;
    declare email?: string;

    // timestamps!
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

User.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false, comment: "用户名", },
    nickName: { type: DataTypes.STRING, allowNull: false, comment: "昵称", },
    avatar: { type: DataTypes.STRING, allowNull: false, },
    gender: { type: DataTypes.STRING, allowNull: false, },
    signature: { type: DataTypes.STRING, allowNull: false, },
    birthday: { type: DataTypes.STRING, allowNull: false, },
    mobile: { type: DataTypes.STRING, },
    email: { type: DataTypes.STRING, },
}, {
    sequelize: sequelize,
    charset: "utf8mb4",
    comment: "用户表",
});
