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
const sequelize_1 = require("sequelize");
const DptoService_1 = require("../models/DptoService");
const dptoServiceRouter = express_1.default.Router();
dptoServiceRouter.post('/dpto/:dpto_id/service/:service_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dpto_id, service_id } = req.params;
    try {
        const dptoServiceFound = yield DptoService_1.DptoService.findAll({
            where: {
                [sequelize_1.Op.and]: [{ dpto_id }, { service_id }]
            }
        });
        if (dptoServiceFound && dptoServiceFound.length > 0) {
            res.status(400).json({
                ok: false,
                content: 'Ya existe un departamento asociado a ese servicio'
            });
        }
        else {
            const dptoServiceCreated = yield DptoService_1.DptoService.create({
                dpto_id,
                service_id
            });
            if (dptoServiceCreated) {
                res.status(201).json({
                    ok: true,
                    content: 'El departamento fue creado de manera exitosa'
                });
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            content: error.toString()
        });
    }
}));
dptoServiceRouter.delete('/dpto/:dpto_id/service/:service_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dpto_id, service_id } = req.params;
    try {
        yield DptoService_1.DptoService.destroy({
            where: {
                dpto_id,
                service_id
            }
        });
        res.status(200).json({
            ok: true,
            content: 'EL servicio ha sido desasociado del departamento de manera exitosa'
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            content: error.toString()
        });
    }
}));
exports.default = dptoServiceRouter;
