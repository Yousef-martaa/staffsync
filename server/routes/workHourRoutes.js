import express from "express";
import workHourController from "#controllers/workHourController";
import authMiddleware from "#middleware/authMiddleware";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  workHourController.createWorkHour
);

router.get(
  "/",
  authMiddleware,
  workHourController.getWorkHours
);

router.get(
  "/:id",
  authMiddleware,
  workHourController.getWorkHourById
);

router.patch(
  "/:id",
  authMiddleware,
  workHourController.updateWorkHour
);

router.get(
  "/total/:employeeName/:month",
  authMiddleware,
  workHourController.getTotalMonthlyHours
);

export default router;