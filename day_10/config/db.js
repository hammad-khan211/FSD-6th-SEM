import mongoose from 'mongoose';
const MONGO_URI = "mongodb+srv://user:admin@crud.mz9ihpc.mongodb.net/Users?appName=Crud";
const dbConnect = async() => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB Connection established successfully");
    } catch (error) {
        console.log("DB connection error" , error.message);
    }
}

// dbConnect();

export default dbConnect;