import { Ambulance } from '../models/ambulance.model.js';
import { Patient } from '../models/patient.model.js';
import { catchAsync } from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

export const acceptRequest = catchAsync(async (req, res) => {
    const ambulanceId = req.user._id
    const { patientId } = req.body;

    if (!ambulanceId || !patientId) {
        throw new AppError('Missing required fields: ambulanceId or patientId.', 400)
    }

    try {
        const ambulance = await Ambulance.findById(ambulanceId);
        if (!ambulance) {
            throw new AppError('Ambulance not found.', 404)
        }

        const patient = await Patient.findById(patientId);
        if (!patient) {
            throw new AppError('Patient not found.', 404)
        }

        ambulance.patient = patientId;
        ambulance.status = 'unavailable';
        await ambulance.save();

        patient.waitingStatus = 'pending';
        patient.ambulanceAssigned = ambulanceId;
        await patient.save();

        // Step 4: Notify both parties (mocked in this example)
        return res.status(200).json({
            status: "success",
            message: 'Ambulance has accepted the request and is en-route to the patient.',
            ambulance: {
                id: ambulance._id,
                driver: ambulance.fullName,
                location: ambulance.liveLocation,
            },
            patient: {
                id: patient._id,
                name: patient.fullName,
                location: patient.location,
            },
        });
    } catch (error) {
        throw new AppError(error.message, error.statusCode)
    }
})

export const notifyHospital = catchAsync(async (req, res) => {
    const ambulanceId = req.user._id
    const { hospitalId, estimatedTimeOfArrival, disease, healthConditionRating } = req.body;

    if (!ambulanceId || !hospitalId || !estimatedTimeOfArrival || !disease || !healthConditionRating) {
        throw new AppError('Missing required fields', 400)
    }

    try {
        const ambulance = await Ambulance.findById(ambulanceId);
        if (!ambulance) {
            throw new AppError('Ambulance not found.', 404)
        }

        const hospital = await Hospital.findById(hospitalId);
        if (!hospital) {
            throw new AppError('Hospital not found.', 404)
        }

        hospital.ambulanceInRoute.push({
            ambulanceId,
            estimatedTimeOfArrival
        });
        await hospital.save();

        return res.status(200).json({
            status: "success",
            message: 'Hospital has been notified about the incoming patient.',
            hospital: hospital._id,
            ambulance: ambulance._id,
            patient: { disease, healthConditionRating }
        });
    } catch (error) {
        throw new AppError(error.message, error.statusCode)
    }
});