import mongoose from "mongoose";
import { User } from "./user.model";


const patientSchema = new mongoose.Schema({
    dob: {
        type: Date,
        required: true
    },
    disease: {
        type: String,
        required: false, // If patient doesn't know, ambulance selects.
        default: 'Unknown'
    },
    healthConditionRating: {
        type: Number,
        min: 1,
        max: 10
    },
    location: {
        type: {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true }
        },
        required: true
    },
    ambulanceAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ambulance'
    },
    hospitalAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    waitingStatus: {
        type: String,
        enum: ['pending', 'pickedup','reached'],
        default: 'pending'
    }
}, { timestamps: true });

export const Patient =  User.discriminator('Patient', patientSchema);;
