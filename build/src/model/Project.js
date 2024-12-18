"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    constructor(id, name, description, repository, deploy, technologies, img) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.repository = repository;
        this.deploy = deploy;
        this.technologies = technologies;
        this.img = img;
        this.getId = () => {
            return this.id;
        };
        this.getName = () => {
            return this.name;
        };
        this.getDescription = () => {
            return this.description;
        };
        this.getRepository = () => {
            return this.repository;
        };
        this.getDeploy = () => {
            return this.deploy;
        };
        this.getTechnologies = () => {
            return this.technologies;
        };
        this.getImg = () => {
            return this.img;
        };
        this.setId = (id) => {
            this.id = id;
        };
        this.setName = (name) => {
            this.name = name;
        };
        this.setDescription = (description) => {
            this.description = description;
        };
        this.setRepository = (repository) => {
            this.repository = repository;
        };
        this.setDeploy = (deploy) => {
            this.deploy = deploy;
        };
        this.setTechnologies = (technologies) => {
            this.technologies = technologies;
        };
    }
}
exports.Project = Project;
//# sourceMappingURL=Project.js.map