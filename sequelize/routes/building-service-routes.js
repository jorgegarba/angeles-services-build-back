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
const Building_1 = require("../models/Building");
const BuildingService_1 = require("../models/BuildingService");
const Dpto_1 = require("../models/Dpto");
const DptoService_1 = require("../models/DptoService");
const Service_1 = require("../models/Service");
const buildingServiceRoute = express_1.default.Router();
buildingServiceRoute.delete('/building/:building_id/service/:service_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { building_id, service_id } = req.params;
    try {
        const building = yield Building_1.Building.findByPk(+building_id, {
            include: [
                {
                    model: Dpto_1.Dpto,
                    include: [{ model: Service_1.Service }],
                },
            ],
        });
        if (building) {
            const { dptos } = building;
            for (let index = 0; index < dptos.length; index++) {
                const serviceFound = dptos[index].services.find((service) => service.id === +service_id);
                if (serviceFound) {
                    yield DptoService_1.DptoService.destroy({
                        where: {
                            service_id,
                            dpto_id: +dptos[index].id,
                        },
                    });
                }
            }
            yield BuildingService_1.BuildingService.destroy({
                where: {
                    building_id,
                    service_id,
                },
            });
            res.status(200).json({
                ok: true,
                content: 'El servicio se ha desasociado del proyecto de manera exitosa',
            });
        }
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            content: error.toString(),
        });
    }
}));
buildingServiceRoute.post('/building/:building_id/service/:service_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { building_id, service_id } = req.params;
    const buildingsServicesFound = yield BuildingService_1.BuildingService.findAll({
        where: {
            building_id,
            service_id,
        },
    });
    if (buildingsServicesFound.length === 0) {
        const buildingServiceCreated = yield BuildingService_1.BuildingService.create({
            building_id,
            service_id,
        });
        res.status(201).json({
            ok: true,
            content: buildingServiceCreated,
        });
    }
    else {
        res.status(400).json({
            ok: true,
            content: 'El proyecto y el servicio que se intenta asociar, ya existe',
        });
    }
}));
exports.default = buildingServiceRoute;
