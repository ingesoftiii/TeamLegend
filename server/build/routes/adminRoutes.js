"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = __importDefault(require("../controllers/postController"));
class AdminRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', postController_1.default.list);
        this.router.get('/:id', postController_1.default.getOne);
        this.router.post('/', postController_1.default.create);
        this.router.put('/:id', postController_1.default.update);
        this.router.delete('/:id', postController_1.default.delete);
    }
}
const adminRoutes = new AdminRoutes();
exports.default = adminRoutes.router;
