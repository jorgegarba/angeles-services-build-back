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
const Service_1 = require("./../models/Service");
const express_1 = __importDefault(require("express"));
const serviceRouter = express_1.default.Router();
serviceRouter.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield Service_1.Service.findAll();
    res.status(200).json({
        ok: true,
        content: services,
    });
}));
serviceRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = yield Service_1.Service.create(req.body);
        res.json({
            ok: true,
            content: service,
        });
    }
    catch (error) {
        res.json({
            ok: false,
            content: error.toString(),
        });
    }
}));
exports.default = serviceRouter;
