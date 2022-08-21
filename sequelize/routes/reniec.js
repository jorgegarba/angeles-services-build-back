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
const axios_1 = __importDefault(require("axios"));
const reniecRouter = express_1.default.Router();
reniecRouter.get('/get-person-by-dni/:dni', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    try {
        const url = `https://api.apis.net.pe/v1/dni?numero=${dni}`;
        const response = yield (0, axios_1.default)(url);
        if (response.status === 200) {
            res.status(200).json({
                ok: true,
                content: `${response.data.nombres} ${response.data.apellidoPaterno} ${response.data.apellidoMaterno}`
            });
        }
        else {
            res.status(404).json({
                ok: false,
                content: 'Usuario no encontrado'
            });
        }
    }
    catch (error) {
        res.status(404).json({
            ok: false,
            content: 'Usuario no encontrado'
        });
    }
}));
exports.default = reniecRouter;
