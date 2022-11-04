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
exports.Dpto = void 0;
const Quote_1 = require("./Quote");
const Building_1 = require("./Building");
const sequelize_typescript_1 = require("sequelize-typescript");
const Service_1 = require("./Service");
const DptoService_1 = require("./DptoService");
const Typology_1 = require("./Typology");
let Dpto = class Dpto extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Dpto.prototype, "number", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Dpto.prototype, "obs", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Dpto.prototype, "floor", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Dpto.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Dpto.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Building_1.Building),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Dpto.prototype, "building_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Typology_1.Typology),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Dpto.prototype, "typology_id", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Quote_1.Quote),
    __metadata("design:type", Array)
], Dpto.prototype, "quotes", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Service_1.Service, () => DptoService_1.DptoService),
    __metadata("design:type", Array)
], Dpto.prototype, "services", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Building_1.Building),
    __metadata("design:type", Building_1.Building)
], Dpto.prototype, "building", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Typology_1.Typology),
    __metadata("design:type", Typology_1.Typology)
], Dpto.prototype, "typology", void 0);
Dpto = __decorate([
    sequelize_typescript_1.Table
], Dpto);
exports.Dpto = Dpto;
