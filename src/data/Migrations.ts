import { BaseDatabase } from "./BaseDatabase";

class Migrations extends BaseDatabase {
  createTable = () => {
    BaseDatabase.connection
      .raw(
        `
        CREATE TABLE IF NOT EXISTS Project(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(500) NOT NULL,
        repository VARCHAR(255) NOT NULL,
        deploy VARCHAR(255) NOT NULL,
        technologies VARCHAR(300) NOT NULL,
        img1 VARCHAR(500) NOT NULL,
        img2 VARCHAR(500),
        img3 VARCHAR(500)
      );
    `
      )
      .then(() => {
        console.log("Tabela(s) criada(s)");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}
const migrations: Migrations = new Migrations();
migrations.createTable();
