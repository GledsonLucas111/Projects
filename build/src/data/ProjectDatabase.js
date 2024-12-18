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
exports.ProjectDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class ProjectDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.insert = (project) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection(ProjectDatabase.TABLE_NAME).insert({
                    id: project.getId(),
                    name: project.getName(),
                    description: project.getDescription(),
                    repository: project.getRepository(),
                    deploy: project.getDeploy(),
                    technologies: project.getTechnologies(),
                    img: project.getImg()
                });
            }
            catch (e) {
                throw new Error(e.sqlMessage || e.message);
            }
        });
        this.getProjectById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection(ProjectDatabase.TABLE_NAME)
                    .select("*")
                    .where({ id });
                return result[0];
            }
            catch (e) {
                throw new Error(e.sqlMessage || e.message);
            }
        });
        this.getAllProjects = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection(ProjectDatabase.TABLE_NAME);
                return result;
            }
            catch (e) {
                throw new Error(e.sqlMessage || e.message);
            }
        });
        this.deleteProject = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection(ProjectDatabase.TABLE_NAME)
                    .where({ id })
                    .del();
            }
            catch (e) {
                throw new Error(e.sqlMessage || e.message);
            }
        });
    }
}
exports.ProjectDatabase = ProjectDatabase;
ProjectDatabase.TABLE_NAME = "Project";
//# sourceMappingURL=ProjectDatabase.js.map