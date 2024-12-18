export class Project {
  constructor(
    private id: string,
    private name: string,
    private description: string,
    private repository: string,
    private deploy: string,
    private technologies: string,
    private img: string
  ) {}

  getId = (): string => {
    return this.id;
  };
  getName = (): string => {
    return this.name;
  };
  getDescription = (): string => {
    return this.description;
  };
  getRepository = (): string => {
    return this.repository;
  };
  getDeploy = (): string => {
    return this.deploy;
  };
  getTechnologies = (): string => {
    return this.technologies;
  };
  getImg = (): string => {
    return this.img;
  };
  
  setId = (id: string) => {
    this.id = id;
  };
  setName = (name: string) => {
    this.name = name;
  };
  setDescription = (description: string) => {
    this.description = description;
  };
  setRepository = (repository: string) => {
    this.repository = repository;
  };
  setDeploy = (deploy: string) => {
    this.deploy = deploy;
  };
  setTechnologies = (technologies: string) => {
    this.technologies = technologies;
  };

}
