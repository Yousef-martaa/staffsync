import express from "express";
import userController from "#controllers/userController";

const router = express.Router();

router.post("/", userController.createUser);

router.get("/", userController.getUsers);

router.get("/:id", userController.getUserById);

router.patch("/:id", userController.updateUser);

router.put("/:id", userController.replaceUser);

router.delete("/:id", userController.deleteUser);

export default router;