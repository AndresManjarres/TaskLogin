import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true, //Quita espacios en blanco
    unique: true, //Que no se repita el correo
  },
  password: {
    type: String,
    required: true,

  }
}, {
  timestamps: true,
});

export default mongoose.model("User", userSchema);