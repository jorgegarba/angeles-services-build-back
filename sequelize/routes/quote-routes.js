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
const Quote_1 = require("./../models/Quote");
const express_1 = __importDefault(require("express"));
const types_1 = require("./../../types");
const sequelize_1 = require("../sequelize");
const Customer_1 = require("../models/Customer");
const Dpto_1 = require("../models/Dpto");
const User_1 = require("../models/User");
const Garage_1 = require("../models/Garage");
const Building_1 = require("../models/Building");
const Typology_1 = require("../models/Typology");
const Service_1 = require("../models/Service");
const quoteRouter = express_1.default.Router();
quoteRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customer: { dni } } = req.body;
    const t = yield sequelize_1.sequelize.transaction();
    try {
        // customer
        let customer = yield Customer_1.Customer.findOne({ where: { dni } });
        if (!customer) {
            customer = yield Customer_1.Customer.create(Object.assign({}, req.body.customer));
        }
        const quote = yield Quote_1.Quote.create(Object.assign(Object.assign({}, req.body.quote), { customer_id: customer.id }));
        yield t.commit();
        res.status(201).json({
            ok: true,
            content: quote
        });
    }
    catch (error) {
        console.log(error);
        yield t.rollback();
        res.status(500).json({
            ok: false,
            content: error.toString()
        });
    }
}));
quoteRouter.put('/update-interest/:quoteId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { interest } = req.body;
        const { quoteId } = req.params;
        const foundQuote = yield Quote_1.Quote.findByPk(quoteId);
        foundQuote.interested = interest;
        yield (foundQuote === null || foundQuote === void 0 ? void 0 : foundQuote.save());
        res.status(200).json({
            ok: true,
            content: 'success'
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            content: error
        });
    }
}));
quoteRouter.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let quotes = yield Quote_1.Quote.findAll(Object.assign({ include: [
                Object.assign({ model: Dpto_1.Dpto, include: [
                        Object.assign({ model: Typology_1.Typology }, types_1.exludedAttr),
                        Object.assign({ model: Building_1.Building }, types_1.exludedAttr)
                    ] }, types_1.exludedAttr),
                Object.assign({ model: Customer_1.Customer }, types_1.exludedAttr),
                {
                    model: User_1.User,
                    attributes: {
                        include: ['id', 'fullname', 'phone'],
                        exclude: [...types_1.exludedAttr.attributes.exclude, 'password', 'type']
                    }
                },
                Object.assign({ model: Garage_1.Garage }, types_1.exludedAttr)
            ] }, types_1.exludedAttr));
        res.status(200).json({ ok: true, content: quotes });
    }
    catch (error) { }
}));
quoteRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let quotes = yield Quote_1.Quote.findByPk(id, Object.assign({ include: [
                Object.assign({ model: Dpto_1.Dpto, include: [
                        Object.assign({ model: Typology_1.Typology }, types_1.exludedAttr),
                        Object.assign({ model: Building_1.Building, include: [
                                Object.assign({ model: Service_1.Service }, types_1.exludedAttr)
                            ] }, types_1.exludedAttr)
                    ] }, types_1.exludedAttr),
                Object.assign({ model: Customer_1.Customer }, types_1.exludedAttr),
                {
                    model: User_1.User,
                    attributes: {
                        include: ['id', 'fullname', 'phone'],
                        exclude: [...types_1.exludedAttr.attributes.exclude, 'password', 'type']
                    }
                },
                Object.assign({ model: Garage_1.Garage }, types_1.exludedAttr)
            ] }, types_1.exludedAttr));
        res.status(200).json({ ok: true, content: quotes });
    }
    catch (error) { }
}));
exports.default = quoteRouter;
