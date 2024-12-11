const mongoose = require("mongoose")

const ambulanceSchema = new mongoose.Schema({
  driverName: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    required: true,
  },
  liveLocation: {
    type: {
      latitude: { type: Number },
      longitude: { type: Number },
    },
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  status: {
    type: String,
    enum: ["available", "on-trip", "unavailable"],
    default: "available",
  },
  healthConditionRating: {
    type: Number,
    min: 1,
    max: 10,
  },
  hospitalAssigned: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Ambulance = mongoose.model("Ambulance", ambulanceSchema)

export default Ambulance
