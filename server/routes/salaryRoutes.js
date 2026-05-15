import express from "express";
import salaryController from "#controllers/salaryController";
import authMiddleware from "#middleware/authMiddleware";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  salaryController.createSalary
);

router.get(
  "/",
  authMiddleware,
  salaryController.getSalaries
);

router.get(
  "/:id",
  authMiddleware,
  salaryController.getSalaryById
);

router.patch(
  "/:id",
  authMiddleware,
  salaryController.updateSalary
);

export default router;
