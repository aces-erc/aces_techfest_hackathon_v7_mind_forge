import { Ambulance } from '../models/ambulance.model.js';
import { Patient } from '../models/patient.model.js';
import { catchAsync } from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

export const ambulanceRequest = catchAsync(async (req, res, next) => {
    const patientId = req.user._id
    const { latitude, longitude } = req.body;

    if (!patientId || !latitude || !longitude) {
        throw new AppError('Missing required fields: patientId, latitude, or longitude.', 400);
    }

    try {
        const patient = await Patient.findById(patientId);
        if (!patient) {
            throw new AppError('Patient not found!', 404);
        }

        patient.location = { latitude, longitude };
        await patient.save();

        const radius = 10; // Radius in kilometers
        const nearbyAmbulances = await Ambulance.find({
            liveLocation: {
                $geoWithin: {
                    $centerSphere: [[longitude, latitude], radius / 6378.1], // earth's radius in km
                },
            },
        });

        // Step 3: Return the list of ambulances to the patient
        return res.status(200).json({
            status: "success",
            message: 'Nearby ambulances found.',
            ambulances: nearbyAmbulances,
        });
    } catch (error) {
        throw new AppError(error.message, error.statusCode)
    }
});