import { Project } from "../model/Project";
import { BaseDatabase } from "./BaseDatabase";

export class ProjectDatabase extends BaseDatabase {
  private static TABLE_NAME: string = "Project";

  insert = async (project: Project): Promise<void> => {
    try {
      await BaseDatabase.connection(ProjectDatabase.TABLE_NAME).insert({
        id: project.getId(),
        name: project.getName(),
        description: project.getDescription(),
        repository: project.getRepository(),
        deploy: project.getDeploy(),
        technologies: project.getTechnologies(),
        img: project.getImg()
      });
    } catch (e: any) {
      throw new Error(e.sqlMessage || e.message);
    }
  };
  
  getProjectById = async (id: string): Promise<Project> => {
    try {
      const result = await BaseDatabase.connection(ProjectDatabase.TABLE_NAME)
        .select("*")
        .where({ id });
      return result[0];
    } catch (e: any) {
      throw new Error(e.sqlMessage || e.message);
    }
  };

  getAllProjects = async (): Promise<Project[]> => {
    try {
      const result: Project[] = await BaseDatabase.connection(
        ProjectDatabase.TABLE_NAME
      );
      return result;
    } catch (e: any) {
      throw new Error(e.sqlMessage || e.message);
    }
  };

  deleteProject = async (id: string): Promise<void> => {
    try {
      await BaseDatabase.connection(ProjectDatabase.TABLE_NAME)
        .where({ id })
        .del();
    } catch (e: any) {
      throw new Error(e.sqlMessage || e.message);
    }
  };
}
