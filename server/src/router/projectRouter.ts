import express from "express";
import { ProjectBusiness } from "../business/ProjectBusiness";
import { ProjectController } from "../controller/ProjectController";
import { ProjectDatabase } from "../data/ProjectDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const projectRouter = express.Router();

const projectBusiness = new ProjectBusiness(
  new IdGenerator(),
  new ProjectDatabase()
);

const projectController = new ProjectController(projectBusiness);

projectRouter.post("/", projectController.insertProject);
projectRouter.get("/", projectController.getAllProjects);
projectRouter.delete("/", projectController.deleteProject);