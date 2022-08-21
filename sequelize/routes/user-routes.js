"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../models/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRouter = express_1.default.Router();
const createToken = (user, SECRET_KEY, expiresIn) => {
    const { id, fullname, phone } = user;
    const payload = {
        id,
        fullname,
        phone
    };
    return jsonwebtoken_1.default.sign(payload, SECRET_KEY, { expiresIn });
};
userRouter.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.User.findAll({
            attributes: ['id', 'fullname', 'phone']
        });
        res.status(200).json({
            ok: true,
            content: users
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            content: 'Error al intentar devolver los usuarios'
        });
    }
}));
userRouter.post('/verify-session', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    try {
        if (token) {
            const user = jsonwebtoken_1.default.verify(token.split(' ')[1], process.env.SECRET_KEY);
            if (user) {
                res.status(200).json({
                    ok: true,
                    content: user
                });
            }
            else {
                res.status(400).json({
                    ok: false,
                    content: 'expired'
                });
            }
        }
        else {
            res.status(400).json({
                ok: false,
                content: 'Missing token in the headers'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            content: error
        });
    }
}));
userRouter.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, password } = req.body;
    try {
        const user = yield User_1.User.findByPk(id);
        if (!user) {
            res
                .status(400)
                .json({ ok: false, content: 'User or password incorrect' });
        }
        else {
            const passwordSuccess = yield bcryptjs_1.default.compare(password, user.password || '');
            if (passwordSuccess) {
                const token = createToken({ id: user.id, fullname: user.fullname, phone: user.phone }, process.env.SECRET_KEY, '12h');
                res.status(200).json({ ok: true, content: token });
            }
            else {
                res
                    .status(400)
                    .json({ ok: false, content: 'User or password incorrect' });
            }
        }
    }
    catch (error) {
        res.status(500).json({ ok: false, content: error.toString() });
    }
}));
exports.default = userRouter;
