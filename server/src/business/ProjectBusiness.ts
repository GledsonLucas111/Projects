import { ProjectDatabase } from "../data/ProjectDatabase";
import { CustomError } from "../error/CustomError";
import { IProjectDTO } from "../interface/IProject";
import { Project } from "../model/Project";
import { IdGenerator } from "../services/IdGenerator";

export class ProjectBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private projectDataBase: ProjectDatabase
  ) {}

  insertProject = async (input: IProjectDTO) => {
    const {
      name,
      description,
      repository,
      deploy,
      technologies,
      img
    } = input;

    if (!name || !description|| !repository || !deploy || !technologies) {
      throw new CustomError(422, "Preecha todos os campos no body.");
    }

    const id = this.idGenerator.generateId();

    const project: Project = new Project(
      id,
      name,
      description,
      repository,
      deploy,
      technologies,
      img
    );

    await this.projectDataBase.insert(project);
  };
  getProjectById = async (id: string) => {
    if (!id) {
      throw new CustomError(422, "Preecha o path params");
    }
    const result = await this.projectDataBase.getProjectById(id);
    return result;
  };
  getAllProjects = async () => {
    const result = await this.projectDataBase.getAllProjects();
    return result;
  };

  deleteProject = async (id: string) => {
    if (!id) {
      throw new CustomError(422, "Necessita de um id na path variable");
    }
    await this.projectDataBase.deleteProject(id);
  };
}
