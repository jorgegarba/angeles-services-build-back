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
exports.Building = void 0;
const Dpto_1 = require("./Dpto");
const sequelize_typescript_1 = require("sequelize-typescript");
const Service_1 = require("./Service");
const BuildingService_1 = require("./BuildingService");
const Typology_1 = require("./Typology");
const Garage_1 = require("./Garage");
let Building = class Building extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Building.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Service_1.Service, () => BuildingService_1.BuildingService),
    __metadata("design:type", Array)
], Building.prototype, "services", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Dpto_1.Dpto),
    __metadata("design:type", Array)
], Building.prototype, "dptos", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Garage_1.Garage),
    __metadata("design:type", Array)
], Building.prototype, "garages", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Typology_1.Typology),
    __metadata("design:type", Array)
], Building.prototype, "typologies", void 0);
Building = __decorate([
    sequelize_typescript_1.Table
], Building);
exports.Building = Building;
