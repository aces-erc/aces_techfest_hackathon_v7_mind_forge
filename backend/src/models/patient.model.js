import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  disease: {
    type: String,
    default: "Unknown",
  },
  healthConditionRating: {
    type: Number,
    min: 1,
    max: 10,
  },
  location: {
    type: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    required: true,
  },
  ambulanceAssigned: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ambulance",
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

module.exports = mongoose.model("Patient", patientSchema)
