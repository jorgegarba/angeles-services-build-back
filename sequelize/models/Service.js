"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const Building_1 = require("./Building");
const sequelize_typescript_1 = require("sequelize-typescript");
const Dpto_1 = require("./Dpto");
const DptoService_1 = require("./DptoService");
const BuildingService_1 = require("./BuildingService");
let Service = class Service extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Service.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Dpto_1.Dpto, () => DptoService_1.DptoService),
    __metadata("design:type", Array)
], Service.prototype, "dptos", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Building_1.Building, () => BuildingService_1.BuildingService),
    __metadata("design:type", Array)
], Service.prototype, "buildings", void 0);
Service = __decorate([
    sequelize_typescript_1.Table
], Service);
exports.Service = Service;
