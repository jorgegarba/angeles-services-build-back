"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// export const sequelize = new Sequelize({
// 	dialect: 'mysql',
// 	database: 'servicios',
// 	username: 'root',
// 	password: 'root',
// 	models: [__dirname + '/models']
// });
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: process.env.HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    models: [__dirname + '/models'],
    pool: {
        max: 10,
        min: 0,
        idle: 10000,
    },
});
