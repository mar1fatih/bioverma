import express from "express";
import { createOrder } from "../controllers/orderController.js";
import { orderLimiter } from "../config/rateLimit.js";

const router = express.Router();

router.post("/order", orderLimiter, createOrder);

export default router;