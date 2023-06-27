"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { mainSeeder } from './sequelize/seeders/intex';
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = require("./sequelize/sequelize");
const service_routes_1 = __importDefault(require("./sequelize/routes/service-routes"));
const building_routes_1 = __importDefault(require("./sequelize/routes/building-routes"));
const building_service_routes_1 = __importDefault(require("./sequelize/routes/building-service-routes"));
const dpto_service_route_1 = __importDefault(require("./sequelize/routes/dpto-service-route"));
const dpto_routes_1 = __importDefault(require("./sequelize/routes/dpto-routes"));
const reniec_1 = __importDefault(require("./sequelize/routes/reniec"));
const quote_routes_1 = __importDefault(require("./sequelize/routes/quote-routes"));
const public_routes_1 = __importDefault(require("./sequelize/routes/public-routes"));
const authenticationMW_1 = require("./middleware/authenticationMW");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware para transformar req.body a json
const PORT = process.env.PORT;
app.use((0, cors_1.default)());
app.get('/', (_req, res) => {
    res.json({ ok: true, message: 'welcomse' });
});
app.use('/public', public_routes_1.default);
app.use(authenticationMW_1.authenticationMW);
app.use('/building', building_routes_1.default);
app.use('/building-service', building_service_routes_1.default);
app.use('/dpto-service', dpto_service_route_1.default);
app.use('/dpto', dpto_routes_1.default);
app.use('/reniec', reniec_1.default);
app.use('/service', service_routes_1.default);
app.use('/quote', quote_routes_1.default);
sequelize_1.sequelize
    .sync({ force: false, alter: false })
    .then(() => {
    // mainSeeder();
    app.listen(PORT, () => {
        console.log(`Runing successfuly on PORT ${PORT}`);
    });
})
    .catch((error) => {
    console.log('Error al conectarnos a la base de datos', error);
});
