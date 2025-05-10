// UserSchema.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    lastLogin: Date,
    profilePicture: String,
});

const User = mongoose.model("User", userSchema);

export default User;
