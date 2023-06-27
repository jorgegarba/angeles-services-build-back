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
const types_1 = require("../../../types");
const Building_1 = require("../../models/Building");
const Dpto_1 = require("../../models/Dpto");
const Service_1 = require("../../models/Service");
const Garage_1 = require("../../models/Garage");
const BuildingPicture_1 = require("../../models/BuildingPicture");
const buldingRouterAPIV2Public = express_1.default.Router();
buldingRouterAPIV2Public.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const buildings = yield Building_1.Building.findAll(Object.assign(Object.assign({}, types_1.exludedAttr), { include: [
            Object.assign({ model: Dpto_1.Dpto }, types_1.exludedAttr),
            Object.assign({ model: Service_1.Service }, types_1.exludedAttr),
            Object.assign({ model: Garage_1.Garage }, types_1.exludedAttr),
            Object.assign({ model: BuildingPicture_1.BuildingPicture }, types_1.exludedAttr),
        ] }));
    res.status(200).json({
        ok: true,
        content: buildings,
    });
}));
exports.default = buldingRouterAPIV2Public;
