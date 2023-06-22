import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET student");
});

router.get("/:id", (req, res) => {
  res.send("GET student by id" + req.params?.id);
});

router.post("/insert", (req, res) => {
  res.send("nsert student");
});

export default router;
