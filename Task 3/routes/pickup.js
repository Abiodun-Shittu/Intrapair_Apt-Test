import express from "express";
import pickupDay from "../controllers/pickup.js";

const router = express.Router();

router.post("/pickup", pickupDay);

export default router;
