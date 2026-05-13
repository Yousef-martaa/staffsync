import express from "express";
import userController from "#controllers/userController";
import authMiddleware from "#middleware/authMiddleware";
import roleMiddleware from "#middleware/roleMiddleware";

const router = express.Router();

router.post("/", userController.createUser);

router.get("/", authMiddleware, userController.getUsers);

router.get("/:id", authMiddleware, userController.getUserById);

router.patch("/:id", authMiddleware, userController.updateUser);

router.put("/:id", authMiddleware, userController.replaceUser);

router.delete("/:id", authMiddleware, roleMiddleware("manager", "hr"), userController.deleteUser);

router.post("/login", userController.loginUser);

export default router;