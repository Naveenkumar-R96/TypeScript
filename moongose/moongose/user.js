import mongoose from "mongoose";
import User from "./UserSchema.js";

async function main() {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Connected to MongoDB");

    // Clear existing users
    await User.deleteMany();

    const users = [
        {
            name: "John Doe",
            age: 30,
            email: "john.doe@example.com",
            password: "password123",
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true,
            lastLogin: new Date(),
            profilePicture: "profile1.jpg",
        },
        {
            name: "Alice Johnson",
            age: 28,
            email: "alice.johnson@example.com",
            password: "password789",
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true,
            lastLogin: new Date(),
            profilePicture: "profile3.jpg",
        },
    ];

    // Insert fresh users
    await User.insertMany(users);

    const allUsers = await User.where("name").equals("John Doe").deleteOne();
    const final= await User.find();
    console.log("All Users:", final);   
}

main().catch(err => console.log(err));
