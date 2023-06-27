import mongoose, { Schema, ObjectId } from "mongoose";
import isEmail from "validator/lib/isemail.js";
const Student = mongoose.model(
  "Student",
  new Schema(
    {
      id: { type: ObjectId },
      name: {
        type: String,
        required: true,
        validate: {
          validator: (value) => value.length > 3,
          message: "Username must be at least 3 charecters",
        },
      },
      email: {
        type: String,
        required: true,
        validator: (value) => isEmail,
        message: "Email is incorrect format",
      },
      languages: {
        type: [String],
      },
      gender: {
        type: String,
        enum: {
          values: ["male", "female"],
          message: "{VALUE} is not supported",
        },
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
        validate: {
          validator: (phoneNumber) => phoneNumber.length > 5,
          message: "At least 5 characters",
        },
      },
      address: {
        type: String,
        required: false,
      },
    },
    {
      autoCreate: false,
      autoIndex: true,
    }
  )
);
export default Student;
