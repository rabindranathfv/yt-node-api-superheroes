import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: `get request` });
});

router.get("/:sid", (req, res) => {
  const { sid } = req.params;
  const { type, age } = req.query;
  res.json({ message: `get request`, sid, type });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(
    "🚀 ~ file: superheroes.routes.js:11 ~ router.post ~ body:",
    body
  );
  res.json({ message: `post request`, body });
});

router.put("/", (req, res) => {
  res.json({ message: `put request` });
});

router.delete("/", (req, res) => {
  res.json({ message: `delete request` });
});

export default router;
