import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from "../app/controllers/userController.js";
import { authMiddleware } from "../app/middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", authMiddleware, getAllUsers);
router.get("/user/:id", authMiddleware, getUserProfile);
router.put("/user", authMiddleware, updateUserProfile);
router.delete("/user", authMiddleware, deleteUserProfile);

// Add routes for other APIs (read, update, delete)...

export default router;
