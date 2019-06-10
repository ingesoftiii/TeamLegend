"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class AdminController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield database_1.default.query('SELECT * FROM administrador');
            res.json(admin);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const admin = yield database_1.default.query('SELECT * FROM administrador WHERE id_admin = ?', [id]);
            if (admin.length > 0) {
                return res.json(admin[0]);
            }
            res.status(404).json({ text: 'The admin doesnt exists' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO administrador set ?', [req.body]);
            res.json({ message: 'Admin Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE administrador set ? WHERE id_admin = ?', [req.body, id]);
            res.json({ message: 'The admin was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM administrador WHERE id_admin = ?', [id]);
            res.json({ message: 'The admin was deleted' });
        });
    }
}
const adminController = new AdminController();
exports.default = adminController;
