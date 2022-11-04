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
exports.Typology = void 0;
const Building_1 = require("./Building");
const sequelize_typescript_1 = require("sequelize-typescript");
const Dpto_1 = require("./Dpto");
let Typology = class Typology extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Typology.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Typology.prototype, "url", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Typology.prototype, "area", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Building_1.Building),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Typology.prototype, "building_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Building_1.Building),
    __metadata("design:type", Building_1.Building)
], Typology.prototype, "building", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Dpto_1.Dpto),
    __metadata("design:type", Array)
], Typology.prototype, "dptos", void 0);
Typology = __decorate([
    sequelize_typescript_1.Table
], Typology);
exports.Typology = Typology;
