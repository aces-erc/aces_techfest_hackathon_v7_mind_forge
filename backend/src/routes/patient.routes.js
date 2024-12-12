import express from "express"
import { ambulanceRequest } from "../controllers/patient.controller.js"
import isAuthenticated from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/request-ambulances", isAuthenticated, ambulanceRequest)

export default router