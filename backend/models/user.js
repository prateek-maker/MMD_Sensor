import { Schema, model } from "mongoose";
import { USER_TYPES } from "../helpers/common";

const UserSchema = new Schema(
	{
		Email: { type: String, required: true, unique: true, lowercase: true },
		UserType: { type: String, required: true, enum: USER_TYPES },
		Password: { type: String },
		EmailVerified: { type: Boolean, default: false },
		FirstName : {type: String} ,
		LastName : {type : String} ,
		MobileNumber : { type :String}
	},
	{ timestamps: true }
);

export default model("User", UserSchema);
