import mongoose from "mongoose";

mongoose
	.connect('mongodb://localhost:27017/morph')
	.then(() => console.log("Connected to database"))
	.catch(console.log);
