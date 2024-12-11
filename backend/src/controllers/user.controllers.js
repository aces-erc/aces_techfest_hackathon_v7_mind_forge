import { User } from "../models/user.model.js"
import { Patient } from "../models/patient.model.js"
import { catchAsync } from "../utils/catchAsync.js"
import AppError from "../utils/appError.js"
import { Hospital } from "../models/hospital.model.js"
import { Ambulance } from "../models/ambulance.model.js"

const register = catchAsync(async (req, res, next) => {
    const { fullName, email, password, phoneNumber, role, vehicleNumber, hospitalAddress, hospitalLocation, specialization, dob } = req.body

    console.log("yo mathi ho")
    const existingUser = await User.findOne({ email })

    console.log("bichako")
    if (existingUser) {
        throw new AppError("The user with this email already exists", 400)
    }

    console.log("askfhas")

    let newUser

    if (role === 'Patient') {
        newUser = await Patient.create({
            fullName,
            email,
            password,
            role,
            phoneNumber,
            dob
        });
    } else if (role === 'Ambulance') {
        newUser = await Ambulance.create({
            fullName,
            email,
            password,
            role,
            phoneNumber,
            vehicleNumber
        });
    } else if (role === "Hospital") {
        newUser = await Hospital.create({
            fullName,
            email,
            password,
            role,
            phoneNumber,
            hospitalAddress,
            hospitalLocation,
            specialization
        });
    } else {
        return next(new AppError("Inappropriate role!", 404))
    }

    res.status(201).json({
        status: "success",
        message: "Account created successfully",
        data: null
    })
})

const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(new AppError("Please provide email, password and role", 400))
    }

    const user = await User.findOne({ email }).select("+password")

    if (!user || !(await user.isPasswordCorrect(password))) {
        return next(new AppError("Incorrect email or password", 401))
    }

    const token = user.generateJwtToken()

    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        sameSite: "strict",
    }

    user.password = undefined // should not show up even if its hashed

    res
        .status(200)
        .cookie("token", token, cookieOptions)
        .json({
            status: "success",
            message: "Account created successfully",
            user
        })
})

export {
    register, login
}