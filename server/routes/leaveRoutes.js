import express from "express";
import leaveController from "#controllers/leaveController";
import authMiddleware from "#middleware/authMiddleware";

const router = express.Router();

router.post("/", authMiddleware, leaveController.createLeave);

router.get("/", authMiddleware, leaveController.getLeaves);

router.get("/:id", authMiddleware, leaveController.getLeaveById);

router.patch(
  "/:id",
  authMiddleware,
  leaveController.updateLeave
);

router.delete(
  "/:id",
  authMiddleware,
  leaveController.deleteLeave
);

export default router;