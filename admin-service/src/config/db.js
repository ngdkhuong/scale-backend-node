import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ User Service is Connected to MongoDB")
    } catch (error) {
        console.error("🚫 Failed to connect to Database -> User Service", error)
        process.exit(1);
    }
};

export default connectDB;