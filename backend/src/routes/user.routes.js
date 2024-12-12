import express from "express"
import { register, login, logout } from "../controllers/user.controllers.js"
import isAuthenticated from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)

router.get("/dashboard", isAuthenticated)

export default router
