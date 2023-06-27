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
const types_1 = require("./../../types");
const express_1 = __importDefault(require("express"));
const Building_1 = require("../models/Building");
const Dpto_1 = require("../models/Dpto");
const Service_1 = require("../models/Service");
const BuildingService_1 = require("../models/BuildingService");
const Typology_1 = require("../models/Typology");
const Garage_1 = require("../models/Garage");
const buldingRouter = express_1.default.Router();
buldingRouter.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const buildings = yield Building_1.Building.findAll(Object.assign(Object.assign({}, types_1.exludedAttr), { include: [
            Object.assign({ model: Dpto_1.Dpto, include: [{ model: Typology_1.Typology }] }, types_1.exludedAttr),
            Object.assign({ model: Service_1.Service }, types_1.exludedAttr),
            Object.assign({ model: Garage_1.Garage }, types_1.exludedAttr),
        ] }));
    res.status(200).json({
        ok: true,
        content: buildings,
    });
}));
buldingRouter.get('/:building_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { building_id } = req.params;
    if (building_id) {
        const building = yield Building_1.Building.findByPk(building_id, Object.assign(Object.assign({}, types_1.exludedAttr), { include: [
                Object.assign({ model: Dpto_1.Dpto, include: [{ model: Typology_1.Typology }] }, types_1.exludedAttr),
                Object.assign({ model: Service_1.Service }, types_1.exludedAttr),
                Object.assign({ model: Garage_1.Garage }, types_1.exludedAttr),
            ] }));
        res.status(200).json({
            ok: true,
            content: building,
        });
    }
    else {
        res.status(400).json({
            ok: false,
            content: 'El building_id no es correcto o no existe',
        });
    }
}));
buldingRouter.get('/:building_id/dptos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { building_id } = req.params;
    if (+building_id && +building_id > 0) {
        const building = yield Building_1.Building.findByPk(+building_id, {
            include: [
                { model: Dpto_1.Dpto, include: [{ model: Service_1.Service }] },
                { model: Service_1.Service },
            ],
        });
        try {
            if (building === null || building === void 0 ? void 0 : building.id) {
                res.status(200).json({
                    content: building,
                    ok: true,
                });
            }
            else {
                res.status(404).json({
                    ok: false,
                    content: 'The building_id does not exist.',
                });
            }
        }
        catch (error) {
            res.status(500).json({
                ok: false,
                content: 'Something went wrong.',
            });
        }
    }
    else {
        res.status(400).json({
            ok: false,
            content: 'missing building_id field.',
        });
    }
}));
buldingRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const building = yield Building_1.Building.create(req.body);
        if (req.body.services.length > 0) {
            for (let idx = 0; idx < req.body.services.length; idx++) {
                yield BuildingService_1.BuildingService.create({
                    building_id: building.id,
                    service_id: req.body.services[idx],
                });
            }
        }
        res.json({
            ok: true,
            content: building,
        });
    }
    catch (error) {
        res.json({
            ok: false,
            content: error.toString(),
        });
    }
}));
exports.default = buldingRouter;
