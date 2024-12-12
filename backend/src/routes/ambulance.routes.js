import express from "express"
import { acceptRequest, notifyHospital } from "../controllers/ambulance.controller.js"
import isAuthenticated from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/accept-request", isAuthenticated, acceptRequest)
router.post("/notify-hospital", isAuthenticated, notifyHospital)

export default router