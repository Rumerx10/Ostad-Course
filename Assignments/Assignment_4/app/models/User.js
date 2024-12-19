import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  NIDNumber: { type: String, unique: true, required: true },
  phoneNumber: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  bloodGroup: { type: String, required: true },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const user = mongoose.model("User", userSchema);

export default user;