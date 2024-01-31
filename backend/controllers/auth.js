import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import USER_MODEL from '../models/user';
import bcrypt, { hash } from 'bcrypt'
import Token from "../models/token";
// Generate Access Token
const generateAccessToken = (user) => {
	return jwt.sign(user, '1be48ae8c613885702e63222621c0b5d916e0cb322e4a54304010123a2504fa0', { expiresIn: "15m" });
};

// Generate Refresh Token
const generateRefreshToken = (user) => {
	return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};
const bcryptPassword = (password) => {
	let hashPassword ;
	 bcrypt.hash(password,10,(error,data) =>{
		if(error) console.log("Password is not encrypted")
		hashPassword = data
	}) 
	return hashPassword
}
const decryptPassword = (password,comparePassword) => { 
      return bcrypt.compareSync(password,comparePassword)
}

export const login = async (req,res) => {
	try {
		if(req.body.user) return res.status(401).send({message : 'Data is not found'})  
		let user = req.body.user
		let checkEmailsExists = await USER_MODEL.findOne({Email : user.email},{Email : 1,_id : 1,Password :1}) 
		if(!checkEmailsExists) return res.status(302).send({message : "Email Id doesn't Exists"}) 
		let checkPassword = decryptPassword(user.password,checkEmailsExists.Password) 
	    if(!checkPassword) return res.status(302).send({message : "Password didn't matched !"}) 

		let generateAccessToken = generateAccessToken(user) 
        await Token({
			UserId : checkEmailsExists._id,
			Token : generateAccessToken,
			ExpiresIn : new Date(Date.now() + 604800000)
		}).save();

		return res.status(200).send({message : "You have successfully loggedIn !"})
	
	} catch (error) {
		console.log(error);
	}
}
export const signup = async (req,res) => {
	try {
		
		if(req.body.user) return res.status(401).send({message : 'Data is not found'})  
		let user = req.body.user
		let checkEmailsExists = await USER_MODEL.findOne({Email : user.email}) 
        if(checkEmailsExists) return res.status(302).send({message : 'Email already exists'})  
        user.password = bcryptPassword(user.password) 
		await USER_MODEL(user).save() 
		res.status(200).send({message : 'You have sucessfully signedup !'})

	} catch (error) {
		console.log(error);
	}
}