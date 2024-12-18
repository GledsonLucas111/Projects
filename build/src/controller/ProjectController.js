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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const CustomError_1 = require("../error/CustomError");
class ProjectController {
    constructor(projectBusiness) {
        this.projectBusiness = projectBusiness;
        this.insertProject = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    name: req.body.name,
                    description: req.body.description,
                    repository: req.body.repository,
                    deploy: req.body.deploy,
                    technologies: req.body.technologies,
                    img: req.body.img,
                };
                yield this.projectBusiness.insertProject(input);
                res.status(201).send({ message: "Project inserted successfully" });
            }
            catch (e) {
                if (e instanceof CustomError_1.CustomError) {
                    res.status(e.statusCode).send(e.message);
                }
                else if (e instanceof Error) {
                    res.status(400).send(e.message);
                }
            }
        });
        this.getProjectById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const result = yield this.projectBusiness.getProjectById(id);
                res.status(200).send(result);
            }
            catch (e) {
                if (e instanceof CustomError_1.CustomError) {
                    res.status(e.statusCode).send(e.message);
                }
                else if (e instanceof Error) {
                    res.status(400).send(e.message);
                }
            }
        });
        this.getAllProjects = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.projectBusiness.getAllProjects();
                res.status(200).send(result);
            }
            catch (e) {
                if (e instanceof CustomError_1.CustomError) {
                    res.status(e.statusCode).send(e.message);
                }
                else if (e instanceof Error) {
                    res.status(400).send(e.message);
                }
            }
        });
        this.deleteProject = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield this.projectBusiness.deleteProject(id);
                res.status(200).send({ message: "Project deleted successfully" });
            }
            catch (e) {
                if (e instanceof CustomError_1.CustomError) {
                    res.status(e.statusCode).send(e.message);
                }
                else if (e instanceof Error) {
                    res.status(400).send(e.message);
                }
            }
        });
    }
}
exports.ProjectController = ProjectController;
//# sourceMappingURL=ProjectController.js.map