import express from "express";
import { eventController } from "../controllers/event.controller.js";
import { verifyUser } from "../utils/authorisation.js";

const router = express.Router();

router.post("/viewContent", eventController.viewContent);
router.post("/AddToCart/:userId",verifyUser, eventController.addToCart);
router.post("/purchase/:userId", verifyUser, eventController.purchase);

export default router;
