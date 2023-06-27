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
exports.BuildingPicture = void 0;
const Building_1 = require("./Building");
const sequelize_typescript_1 = require("sequelize-typescript");
let BuildingPicture = class BuildingPicture extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BuildingPicture.prototype, "url", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Building_1.Building),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BuildingPicture.prototype, "building_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Building_1.Building),
    __metadata("design:type", Building_1.Building)
], BuildingPicture.prototype, "building", void 0);
BuildingPicture = __decorate([
    sequelize_typescript_1.Table
], BuildingPicture);
exports.BuildingPicture = BuildingPicture;
