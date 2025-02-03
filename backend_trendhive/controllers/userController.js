import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => { 
    return jwt.sign({id},process.env.JWT_SECRET)
}
const loginUser = async (req,res) => {
    

    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) { 
            return res.json({success:false,message:"User does not exists"})
        }

        const isMatched = await bcrypt.compare(password, user.password)
        
        if (isMatched) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        }
        else { 
            res.json({success:false,message:'Invalid credentials'})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if all required fields are present
        if (!name || !email || !password) {
            return res.json({ success: false, message: "All fields are required" });
        }

        const exists = await userModel.findOne({ email });

        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate email and check for strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password with at least 8 characters" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        // Create token and send it as response
        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


const adminLogin = async (req, res) => { 
    try {
        
    
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign(email + password, process.env.JWT_SECRET);
        res.json({ success: true, token })
    }
    else { 
        res.json({success:false,message:"Invalid Credentials"})
        }

        } 
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export  { loginUser,registerUser,adminLogin}