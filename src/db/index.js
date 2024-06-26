import mongoose from "mongoose";

const connectDB = async () => { 
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/inddev`);
        console.log(`MongoDB connected.`);
    } catch (error) {
        console.log('MongoDB connection failed at db/index.js');
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;
