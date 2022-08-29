export class Project {
  constructor(
    private id: string,
    private name: string,
    private description: string,
    private repository: string,
    private deploy: string,
    private technologies: string,
    private img1: string,
    private img2: string,
    private img3: string
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
  getImg1 = (): string => {
    return this.img1;
  };
  getImg2 = (): string => {
    return this.img2;
  };
  getImg3 = (): string => {
    return this.img3;
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
