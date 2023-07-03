import { Router } from "express";
import {
  createSuperHeroe,
  deleteSuperHeroeById,
  getAllSuperHeroes,
  getSuperHeroesById,
  updateSuperHeroeById,
} from "../controllers/superhoure.controller.js";

const router = Router();

router.get("/", getAllSuperHeroes);

router.get("/:sid", getSuperHeroesById);

router.post("/", createSuperHeroe);

router.put("/:sid", updateSuperHeroeById);

router.delete("/:sid", deleteSuperHeroeById);

export default router;
