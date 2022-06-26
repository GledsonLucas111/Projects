import { BaseDatabase } from "./BaseDatabase";

class Migrations extends BaseDatabase {
  createTable = () => {
    BaseDatabase.connection
      .raw(
        `
      CREATE TABLE IF NOT EXISTS Bikes(
        id VARCHAR(255) PRIMARY KEY
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
