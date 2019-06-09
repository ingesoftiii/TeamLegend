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
class PostController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield database_1.default.query('SELECT * FROM post');
            res.json(post);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const post = yield database_1.default.query('SELECT * FROM post WHERE id_post = ?', [id]);
            if (post.length > 0) {
                return res.json(post[0]);
            }
            res.status(404).json({ text: 'The post doesnt exists' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO post set ?', [req.body]);
            res.json({ message: 'equipo Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE post set ? WHERE id_post = ?', [req.body, id]);
            res.json({ message: 'The post was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM post WHERE id_post = ?', [id]);
            res.json({ message: 'The post was deleted' });
        });
    }
}
const postController = new PostController();
exports.default = postController;
