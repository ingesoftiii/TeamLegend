"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playerController_1 = __importDefault(require("../controllers/playerController"));
class PlayerRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', playerController_1.default.list);
        this.router.get('/:id', playerController_1.default.getOne);
        this.router.post('/', playerController_1.default.create);
        this.router.put('/:id', playerController_1.default.update);
        this.router.delete('/:id', playerController_1.default.delete);
    }
}
const playerRoutes = new PlayerRoutes();
exports.default = playerRoutes.router;
