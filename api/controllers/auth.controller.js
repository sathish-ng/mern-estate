import User from "../models/user.model.js";
import bcrypts from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

import jwt from 'jsonwebtoken'

export const signup=async (req,res,next)=>{

    const{username,email,password}=req.body;
    const hashedPassword=bcrypts.hashSync(password,10);
    const newUser=new User({username, email, password: hashedPassword});

    try {
        await newUser.save()
        res.status(201).json('User created successfully');   
    } catch (error) {
        //next(errorHandler(550,'error from the function'));
        next(error);
    }
};

export const signin =async(req,res,next)=>{
    const {email,password}=req.body;
    try {
        const validUser =await User.findOne({email : email})
        if(!validUser) return next(errorHandler(404,'User not found!'));
    const vaildPassword = bcrypts.compareSync(password, validUser.password);
        if(!vaildPassword) return next(errorHandler(401,'Invalid password or email'));

        const token =jwt.sign({id : validUser._id},process.env.JWT_SECRET)
        const {password: pass, ...rest}= validUser._doc;

        res
        .cookie('access_token',token,{httpOnly: true})
        .status(200)
        .json(rest);
    } catch (error) {
        next(error)
    }
}