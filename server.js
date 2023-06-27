import express from "express";
import * as dotenv from "dotenv";
import { usersRouter, studentsRouter } from "./routes/index.js";
import connect from "./database/database.js";
import checkToken from "./authentication/auth.js";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT ?? 3000;
app.use(checkToken);
// routers
app.use("/user", usersRouter);
app.use("/student", studentsRouter);

app.listen(port, async () => {
  await connect();
  console.log(`listening on port ${port}`);
});
