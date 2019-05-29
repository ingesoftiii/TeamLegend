"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipoController_1 = __importDefault(require("../controllers/equipoController"));
class EquipoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', equipoController_1.default.list);
        this.router.get('/:id', equipoController_1.default.getOne);
        this.router.post('/', equipoController_1.default.create);
        this.router.put('/:id', equipoController_1.default.update);
        this.router.delete('/:id', equipoController_1.default.delete);
    }
}
const equiporoutes = new EquipoRoutes();
exports.default = equiporoutes.router;
