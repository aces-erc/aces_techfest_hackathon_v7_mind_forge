import mongoose from "mongoose";
import { User } from "./user.model";

const hospitalSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    location: {
        type: {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true }
        },
        required: true
    },
    specialization: [String],
    ambulanceInRoute: [
        {
            ambulanceId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Ambulance',
                required: true
            },
            estimatedTimeOfArrival: {
                type: Number,
                required: true
            }
        }],
}, { timestamps: true });


export const Hospital = User.discriminator('Hospital', hospitalSchema);;