"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationMW = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticationMW = (req, res, next) => {
    try {
        const tokenHeader = req.headers.authorization;
        if (!tokenHeader)
            return res.status(401).send('Acceso no autorizado...');
        else {
            const token = jsonwebtoken_1.default.verify(tokenHeader.slice(7), process.env.SECRET_KEY);
            if (token) {
                next();
                return;
            }
            else
                return res.status(401).send('Acceso no autorizado...');
        }
    }
    catch (error) {
        return res.status(400).json({
            error: new Error('Petición inválida'),
        });
    }
};
exports.authenticationMW = authenticationMW;
