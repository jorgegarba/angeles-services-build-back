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
exports.Quote = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Dpto_1 = require("./Dpto");
const Customer_1 = require("./Customer");
const User_1 = require("./User");
const Garage_1 = require("./Garage");
let Quote = class Quote extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Customer_1.Customer),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Quote.prototype, "customer_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Customer_1.Customer),
    __metadata("design:type", Customer_1.Customer)
], Quote.prototype, "customer", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Dpto_1.Dpto),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Quote.prototype, "dpto_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Dpto_1.Dpto),
    __metadata("design:type", Dpto_1.Dpto)
], Quote.prototype, "dpto", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Quote.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User),
    __metadata("design:type", User_1.User)
], Quote.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Garage_1.Garage),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Quote.prototype, "garage_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Garage_1.Garage),
    __metadata("design:type", Garage_1.Garage)
], Quote.prototype, "garage", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Quote.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Quote.prototype, "discount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Quote.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Quote.prototype, "interested", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Quote.prototype, "paymentsQTY", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Quote.prototype, "firstPaymentDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Quote.prototype, "lastPaymentDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Quote.prototype, "initialAmount", void 0);
Quote = __decorate([
    sequelize_typescript_1.Table
], Quote);
exports.Quote = Quote;
