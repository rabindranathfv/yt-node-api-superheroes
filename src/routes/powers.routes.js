import { Router } from "express";
import {
  createPower,
  deletePowerById,
  getAllPowers,
  getPowerById,
  updatePowerById,
} from "../controllers/power.controller.js";

const router = Router();

router.get("/", getAllPowers);

router.get("/:pid", getPowerById);

router.post("/", createPower);

router.put("/:pid", updatePowerById);

router.delete("/:pid", deletePowerById);

export default router;
