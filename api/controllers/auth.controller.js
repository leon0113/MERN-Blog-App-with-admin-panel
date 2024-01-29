import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password || userName === '' || email === '' || password === '') {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    //hash password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        userName,
        email,
        password: hashedPassword
    })

    try {
        await newUser.save();
        res.json('User Sign Up Successfull!')
    } catch (error) {
        res.status(500).json({ message: "Same User Name or  Email is already in use." });
    }
}