import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utlis/error.js";
import jwt from "jsonwebtoken";

//TODO ------------------------ singup-----------------
export const signup = async (req, res, next) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password || userName === '' || email === '' || password === '') {
        next(errorHandler(400, "All fields are required"))
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
        next(error)
    }
};

//TODO ___________________________________signin____________________________
export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === "" || password === "") {
        next(errorHandler(400, "Email and Password is required"));
    }


    try {

        const validUser = await User.findOne({ email });
        if (!validUser) {
            next(errorHandler(404, "Invalid Credentials"));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(404, 'Invalid Credentials'));
        }

        const token = jwt.sign(
            { id: validUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        const { password: pass, ...rest } = validUser._doc;

        res.status(200).cookie('access_token', token, { httpOnly: true }).json(rest)

    } catch (error) {
        next(error)
    }

}
