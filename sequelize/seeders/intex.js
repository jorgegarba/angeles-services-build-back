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
exports.mainSeeder = void 0;
const users_1 = require("./users");
const Garage_1 = require("./../models/Garage");
const garage_1 = require("./garage");
const Building_1 = require("../models/Building");
const BuildingService_1 = require("../models/BuildingService");
const Dpto_1 = require("../models/Dpto");
const DptoService_1 = require("../models/DptoService");
const Service_1 = require("../models/Service");
const Typology_1 = require("../models/Typology");
const buildings_1 = require("./buildings");
const buildingservice_1 = require("./buildingservice");
const dpto_1 = require("./dpto");
const dptoservice_1 = require("./dptoservice");
const services_1 = require("./services");
const typologies_1 = require("./typologies");
const User_1 = require("../models/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mainSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    for (const s of services_1.services) {
        yield Service_1.Service.create(s);
    }
    for (const b of buildings_1.buildings) {
        yield Building_1.Building.create(b);
    }
    for (const g of garage_1.garages) {
        yield Garage_1.Garage.create(g);
    }
    for (const t of typologies_1.typologies) {
        yield Typology_1.Typology.create(t);
    }
    for (const bs of buildingservice_1.buildingservice) {
        yield BuildingService_1.BuildingService.create(bs);
    }
    for (const d of dpto_1.dptos) {
        yield Dpto_1.Dpto.create(d);
    }
    for (const ds of dptoservice_1.dptoservice) {
        yield DptoService_1.DptoService.create(ds);
    }
    // seeding users
    for (const u of users_1.users) {
        const salt = yield bcryptjs_1.default.genSalt(10);
        const savedpass = yield bcryptjs_1.default.hash('123456', salt);
        u.password = savedpass;
        yield User_1.User.create(u);
    }
});
exports.mainSeeder = mainSeeder;
