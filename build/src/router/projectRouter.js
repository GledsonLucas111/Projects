"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = __importDefault(require("express"));
const ProjectBusiness_1 = require("../business/ProjectBusiness");
const ProjectController_1 = require("../controller/ProjectController");
const ProjectDatabase_1 = require("../data/ProjectDatabase");
const IdGenerator_1 = require("../services/IdGenerator");
exports.projectRouter = express_1.default.Router();
const projectBusiness = new ProjectBusiness_1.ProjectBusiness(new IdGenerator_1.IdGenerator(), new ProjectDatabase_1.ProjectDatabase());
const projectController = new ProjectController_1.ProjectController(projectBusiness);
exports.projectRouter.post("/", projectController.insertProject);
exports.projectRouter.get("/", projectController.getAllProjects);
exports.projectRouter.get("/:id", projectController.getProjectById);
exports.projectRouter.delete("/", projectController.deleteProject);
//# sourceMappingURL=projectRouter.js.map