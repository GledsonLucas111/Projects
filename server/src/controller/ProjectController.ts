import { Request, Response } from "express";
import { ProjectBusiness } from "../business/ProjectBusiness";
import { CustomError } from "../error/CustomError";
import { IProjectDTO } from "../interface/IProject";

export class ProjectController {
  constructor(private projectBusiness: ProjectBusiness) {}

  insertProject = async (req: Request, res: Response) => {
    try {
      const input: IProjectDTO = {
        name: req.body.name,
        description: req.body.description,
        repository: req.body.repository,
        deploy: req.body.deploy,
        technologies: req.body.technologies,
        img: req.body.img,
      };
      await this.projectBusiness.insertProject(input);

      res.status(201).send({ message: "Project inserted successfully" });
    } catch (e) {
      if (e instanceof CustomError) {
        res.status(e.statusCode).send(e.message);
      } else if (e instanceof Error) {
        res.status(400).send(e.message);
      }
    }
  };
  getProjectById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const result = await this.projectBusiness.getProjectById(id);
      
      res.status(200).send(result);
    } catch (e) {
      if (e instanceof CustomError) {
        res.status(e.statusCode).send(e.message);
      } else if (e instanceof Error) {
        res.status(400).send(e.message);
      }
    }
  };
  getAllProjects = async (req: Request, res: Response) => {
    try {
      const result = await this.projectBusiness.getAllProjects();
      res.status(200).send(result);
    } catch (e) {
      if (e instanceof CustomError) {
        res.status(e.statusCode).send(e.message);
      } else if (e instanceof Error) {
        res.status(400).send(e.message);
      }
    }
  };
  deleteProject = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      await this.projectBusiness.deleteProject(id);
      res.status(200).send({ message: "Project deleted successfully" });
    } catch (e) {
      if (e instanceof CustomError) {
        res.status(e.statusCode).send(e.message);
      } else if (e instanceof Error) {
        res.status(400).send(e.message);
      }
    }
  };
}
