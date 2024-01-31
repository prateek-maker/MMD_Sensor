
import express from "express";
import userRoutes from "./routes/index.js";
import "./config/mongoose.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRoutes);
app.listen(port, () => console.log("User service running on http://localhost:" + port));