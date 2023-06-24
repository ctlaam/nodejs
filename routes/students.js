import express from "express";
import { studentController } from "../controllers/index.js";

const router = express.Router();

router.get("/", studentController.getAllStudent);

router.get("/:id", (req, res) => {
  res.send("GET student by id" + req.params?.id);
});

router.post("/insert", (req, res) => {
  res.send("nsert student");
});

export default router;
