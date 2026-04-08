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
const readUsers = async () => {
    try {
        const users = await User.find();
        console.log(users);
    } catch (error) {
        console.log("Unable to read users" , error.message);
    }
}

const updateUsers = async(email , userDetails) => {
    try {
        await User.updateOne({email : email},{$set : userDetails})
        console.log("User has been updated successfully ");
    } catch (error) {
        console.log("Cannot update user " , error.message);
    }
}
updateUsers("abcd@gmail.com" , {password: "newabc123"});
// readUsers();
// createUser(
//     {
//         name : "Hammad",
//         email : "ahmadhammadkhan21112005@gmail.com",
//         password: "ham123",
//         gender: "Male"
//     }
// )