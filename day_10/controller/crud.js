import dbConnect from "../config/db.js";
import User from "../models/User.js";
// dbConnect();
export const createUser = async(user) => {
    try {
        const createdUser = await User.create(user);
        return { status : 200 , message : " User has been created successfully"};      
    } catch (error) {
        return { status : 500 , message : " Unable to create User"};  
    }
}
export const readUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json({data : users , message : "successful"})
    } catch (error) {
        res.status(500).json({message : error.message}); 
    }
}

export const updateUsers = async(email , userDetails) => {
    try {
        await User.updateOne({email : email},{$set : userDetails})
        return { status : 200 , message : " User has been updated successfully"};  
    } catch (error) {
        return { status : 500 , message : " Unable to update Users"};  
    }
}

export const deleteUser = async(email) => {
    try {
        const deletedUser = await User.findOneAndDelete({email : email});
        return deletedUser ? { status : 200 , message : " User has been deleted successfully"} :{ status : 500 , message : " User doest not exist"}; 
        
    } catch (error) {
        return { status : 500 , message : " Unable to delete Users"};
    }
}
 
// deleteUser("abcd@gmail.com");

// updateUsers("abcd@gmail.com" , {password: "newabc123"});

// readUsers();

// createUser(
//     {
//         name : "Aditya",
//         email : "aditya@gmail.com",
//         password: "adi123",
//         gender: "Male"
//     }
// )