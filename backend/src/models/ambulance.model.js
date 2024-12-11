import mongoose from "mongoose";
import { User } from "./user.model";

const ambulanceSchema = new mongoose.Schema({
    vehicleNumber: {
        type: String,
        required: true,
        unique: true
    },
    liveLocation: {
        type: {
            latitude: { type: Number },
            longitude: { type: Number }
        }
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    status: {
        type: String,
        enum: ['available', 'unavailable'],
        default: 'available'
    },
    hospitalAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
}, { timestamps: true });

export const Ambulance = User.discriminator('Ambulance', ambulanceSchema);;
