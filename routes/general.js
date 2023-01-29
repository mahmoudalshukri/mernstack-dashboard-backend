import express from "express";
import { getUser, getDashbaordStats } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get('/dashboard', getDashbaordStats);

export default router;