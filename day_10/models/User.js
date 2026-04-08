import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true

    },
    password : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
        enum : [ "M" , "F" , "Male" , "Female" ]
    }
} , {timestamps : true});

const User = mongoose.model("users" , userSchema);
export default User;