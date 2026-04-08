import dbConnect from "../config/db.js";
import User from "../models/User.js";
dbConnect();
const createUser = async(user) => {
    try {
        const createdUser = await User.create(user);
        console.log("User is created successfully");        
    } catch (error) {
        console.log("Unable to create User" , error.message);
    }
}
createUser(
    {
        name : "Rohini",
        email : "abcd@gmail.com",
        password: "abc123",
        gender: "F"
    }
)