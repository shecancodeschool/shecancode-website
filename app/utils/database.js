import mongoose from "mongoose";



let isConnected = false; // Track the connection status

export const connectToDB = async () => {
    if(isConnected) {
        console.log('MongoDB is already connected')
        return;
    } 
    try {
        await mongoose.connect("mongodb://localhost:27017/shecancode")

        isConnected = true;
        console.log('MongoDB is connected');

    } catch (error) {
        console.log('MongoDB error: ' + error);
    }
}

// ENV SETUP FOR MONGODB CONNECTION STRING:
// Example: MONGODB_URI=mongodb://localhost:27017/shecancode