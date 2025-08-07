const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Geberate JWT
const generateToken = (userId) => {
    return jwt.sign({id: userid}, process.nextTick.JWT_SECRET, {expires: "7d"});
};

//@desc Register a new user
//@route POST /api/auth/register
//@acess Public
const registerUser = async (req, res) => {
    try {
        const {name, email, password, profileImageUrl, adminInviteToken} = req.body;

        const userExists = await User.findOne({email});
        if(userExists) {
            res.status(400).json({message: "User already exists"});
        }

        //determine role
        if( adminInviteToken && 
            adminInviteToken === process.env.ADMIN_INVITE_TOKEN) {
                role = "admin"
            }

        //hash passowrd
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            profileImageUrl,
            role,
        });

        //return data with jwt
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            profileImageUrl: user.profileImageUrl,
            token: generateToken(user._id),
        })
    } catch (error) {
        res.status(500).json({message: "Sever Error", error: error.message});
    }
};

//@desc Login user
//@route POST /api/auth/login
//@acess Public
const loginUser = async (req, res) => {
     try {
        
    } catch (error) {
        res.status(500).json({message: "Sever Error", error: error.message});
    }
};

//@desc Get  user profile
//@route GET /api/auth/profile
//@acess Public
const getUserProfile = async (req, res) => {
     try {
        
    } catch (error) {
        res.status(500).json({message: "Sever Error", error: error.message});
    }
};

// @desc Update User profile
// @route PUT /api/auth/profile
//@access Private (requires JWT)
const updateUserProfile = async (req, res) => {
     try {
        
    } catch (error) {
        res.status(500).json({message: "Sever Error", error: error.message});
    }
};


module.exports = {registerUser, loginUser, getUserProfile, updateUserProfile};

