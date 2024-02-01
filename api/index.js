import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';


dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log(error);
})

const app = express();
app.use(express.json());
app.use(cors())

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});


app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)


// error handling middleware 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong!";

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})