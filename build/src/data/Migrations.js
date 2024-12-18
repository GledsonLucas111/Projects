"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDatabase_1 = require("./BaseDatabase");
class Migrations extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.createTable = () => {
            BaseDatabase_1.BaseDatabase.connection
                .raw(`
        CREATE TABLE IF NOT EXISTS Project(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(500) NOT NULL,
        repository VARCHAR(255) NOT NULL,
        deploy VARCHAR(255) NOT NULL,
        technologies VARCHAR(300) NOT NULL,
        img VARCHAR(500) NOT NULL
      );
    `)
                .then(() => {
                console.log("Tabela(s) criada(s)");
            })
                .catch((error) => {
                console.log(error.message);
            });
        };
    }
}
const migrations = new Migrations();
migrations.createTable();
//# sourceMappingURL=Migrations.js.map