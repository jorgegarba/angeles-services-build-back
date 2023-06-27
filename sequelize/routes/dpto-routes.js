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
const DptoService_1 = require("../models/DptoService");
const Dpto_1 = require("../models/Dpto");
const dptoRouter = express_1.default.Router();
dptoRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { number, obs, services, building_id } = req.body;
    try {
        const dptoCreated = yield Dpto_1.Dpto.create({
            number,
            obs,
            building_id,
        });
        if (dptoCreated) {
            for (let idx = 0; idx < services.length; idx++) {
                yield DptoService_1.DptoService.create({
                    dpto_id: dptoCreated.id,
                    service_id: services[idx],
                });
            }
            res.status(201).json({
                ok: true,
                content: 'El departamento ha sido registrado correctamente',
            });
        }
        else {
            res.status(400).json({
                ok: false,
                content: 'ocurrió un problema al crear el departamento',
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            content: error.toString(),
        });
    }
}));
exports.default = dptoRouter;
