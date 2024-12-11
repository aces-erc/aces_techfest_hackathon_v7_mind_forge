import mongoose from "mongoose"
import validator from "validator"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name field should not be blank"],
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email address"],
  },
  dob: {
    type: Date,
    required: [true, "Date of birth should be specified"],
    validate: [validator.isDate, "Please provide a valid date"],
  },
  address: {
    type: String,
    required: [true, "The address field should not be blank"],
  },
  contact: {
    type: Number,
    required: [true, "The contact field should be provided"],
  },
  password: {
    type: String,
    required: [true, "Password can not be empty"],
    minlength: [8, "Password must be atleast 8 characters or more"],
    select: false,
  },
  address: {
    type: String,
    required: [true, "The address field should not be blank"],
  },
  location: String,
})

const User = mongoose.model("User", userSchema)

export default User
