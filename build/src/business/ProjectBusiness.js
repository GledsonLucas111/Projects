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
exports.ProjectBusiness = void 0;
const CustomError_1 = require("../error/CustomError");
const Project_1 = require("../model/Project");
class ProjectBusiness {
    constructor(idGenerator, projectDataBase) {
        this.idGenerator = idGenerator;
        this.projectDataBase = projectDataBase;
        this.insertProject = (input) => __awaiter(this, void 0, void 0, function* () {
            const { name, description, repository, deploy, technologies, img } = input;
            if (!name || !description || !repository || !deploy || !technologies) {
                throw new CustomError_1.CustomError(422, "Preecha todos os campos no body.");
            }
            const id = this.idGenerator.generateId();
            const project = new Project_1.Project(id, name, description, repository, deploy, technologies, img);
            yield this.projectDataBase.insert(project);
        });
        this.getProjectById = (id) => __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new CustomError_1.CustomError(422, "Preecha o path params");
            }
            const result = yield this.projectDataBase.getProjectById(id);
            return result;
        });
        this.getAllProjects = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.projectDataBase.getAllProjects();
            return result;
        });
        this.deleteProject = (id) => __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new CustomError_1.CustomError(422, "Necessita de um id na path variable");
            }
            yield this.projectDataBase.deleteProject(id);
        });
    }
}
exports.ProjectBusiness = ProjectBusiness;
//# sourceMappingURL=ProjectBusiness.js.map