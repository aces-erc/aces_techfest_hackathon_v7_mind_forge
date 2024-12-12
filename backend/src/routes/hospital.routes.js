import express from "express"
import { ambulanceReachedHospital } from "../controllers/hospital.controller.js"
import isAuthenticated from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post('/ambulance-reached', isAuthenticated, ambulanceReachedHospital);

export default router