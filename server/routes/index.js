import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { getMenu, getRestaurant, getOnlyMenu, getDishes } from "../controllers/Restaurant.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.get("/menu", verifyToken, getMenu);
router.get("/restaurant", verifyToken, getRestaurant);
router.get("/menu-only", verifyToken, getOnlyMenu);
router.get("/dishes", verifyToken, getDishes);

export default router;
