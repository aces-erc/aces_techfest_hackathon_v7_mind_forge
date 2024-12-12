import { Ambulance } from '../models/ambulance.model.js';
import { Patient } from '../models/patient.model.js';
import { Hospital } from '../models/hospital.model.js';
import { catchAsync } from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

export const ambulanceReachedHospital = catchAsync(async (req, res) => {
    const hospitalId = req.user._id
    const { ambulanceId, patientId } = req.body;

    if (!ambulanceId || !patientId || !hospitalId) {
        throw new AppError('Missing required fields: ambulanceId, patientId, or hospitalId.', 400)
    }

    try {
        const hospital = await Hospital.findById(hospitalId);
        if (!hospital) {
            throw new AppError("Hospital not found", 404)
        }

        const patient = await Patient.findById(patientId);
        if (!patient) {
            throw new AppError("Patient not found", 404)
        }

        const ambulance = await Ambulance.findById(ambulanceId);
        if (!ambulance) {
            throw new AppError("Ambulance not found", 404)
        }

        patient.waitingStatus = 'reached';
        await patient.save();

        // Remove Ambulance from the hospital's ambulanceInRoute list
        hospital.ambulanceInRoute = hospital.ambulanceInRoute.filter(route => route.ambulanceId.toString() !== ambulanceId);
        await hospital.save();

        // Respond with success message
        return res.status(200).json({
            status: "success",
            message: 'Ambulance successfully reached the Hospital with the Patient.',
            patient,
            hospital
        });
    } catch (error) {
        throw new AppError(error.message, error.statusCode)
    }
});