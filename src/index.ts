import dotenv from "dotenv";
import { AddressInfo } from "net";
import express, {Express} from "express";
import cors from 'cors'
import { projectRouter } from "./router/projectRouter";


dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/project", projectRouter);

const server = app.listen(process.env.PORT || 4000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
