import mongoose from "mongoose";
import User from "./UserSchema.js"; // Adjusted import

async function main() {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Connected to MongoDB");

    const user = new User({
        name: "John Doe",
        age: 30,
        hobbies: ["reading", "gaming"],
    });

    await user.save()
    console.log("User saved:", user);

}

main().catch(err => console.log(err));