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
class EquipoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const equipos = yield database_1.default.query('SELECT * FROM equipos');
            res.json(equipos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const equipos = yield database_1.default.query('SELECT * FROM equipos WHERE id_equipo = ?', [id]);
            if (equipos.length > 0) {
                return res.json(equipos[0]);
            }
            res.status(404).json({ text: 'The equiposs doesnt exists' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO equipos set ?', [req.body]);
            res.json({ message: 'equipo Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE equipos set ? WHERE id_equipo = ?', [req.body, id]);
            res.json({ message: 'The equipo was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM equipos WHERE id_equipo = ?', [id]);
            res.json({ message: 'The equipos was deleted' });
        });
    }
}
const equipoController = new EquipoController();
exports.default = equipoController;
