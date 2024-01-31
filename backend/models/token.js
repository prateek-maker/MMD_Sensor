import { Schema, model } from "mongoose";


const TokenSchema = new Schema(
	{
		UserId: { type: String },
		Token: { type: String },
		ExpiresIn: { type: Number },
	},
	{ timestamps: true }
);

export default model("Token", TokenSchema);