import express from "express";
import * as dotenv from "dotenv";
import { usersRouter, studentsRouter } from "./routes/index.js";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT ?? 3000;

// routers
app.use("/user", usersRouter);
app.use("/student", studentsRouter);

app.listen(port, async () => {
  console.log(`listening on port ${port}`);
});
