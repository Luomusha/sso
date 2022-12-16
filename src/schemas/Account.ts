import { DataTypes, Model } from "sequelize";
import { sequelize } from "../common/db";
import { Account as Type } from "../types";
import { User } from "./User";

export class Account extends Model<Type, Omit<Type, "id">> implements Type {
    declare readonly id: number;
    declare readonly uid: number;
    declare identityType: string;
    declare identifier: string;
    declare certificate: string;

    // timestamps!
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

Account.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    uid: { type: DataTypes.INTEGER, allowNull: false, comment: "用户ID", },
    identityType: { type: DataTypes.STRING, allowNull: false, comment: "账户类别", },
    identifier: { type: DataTypes.STRING, allowNull: false, comment: "账户名", },
    certificate: { type: DataTypes.STRING, allowNull: false, comment: "账户密码", },
}, {
    sequelize: sequelize,
    charset: "utf8mb4",
    comment: "账户表",
});

User.hasMany(Account)
Account.belongsTo(User)