import jwt from "jsonwebtoken"
import { promisify } from "util"

import AppError from "../utils/appError.js"
import { catchAsync } from "../utils/catchAsync.js"
import { User } from "../models/user.model.js"

const isAuthenticated = catchAsync(async (req, res, next) => {
    const token = req.cookies.token
    if (!token) throw new AppError("You are not logged in! Please login to get access", 401)

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_TOKEN_SECRET)

    const currentUser = await User.findById(decoded._id)
    if (!currentUser) throw new AppError("The user with this token no longer exists!", 401)

    req.user = currentUser
    next()
})

export default isAuthenticated