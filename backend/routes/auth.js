import { Router } from "express";

const authRoutes = Router();
const AuthController = require('../controllers/auth')

authRoutes.post('/login',(...args) => AuthController.login(...args))
authRoutes.post('/signup',(...args) => AuthController.signup(...args))

export default authRoutes;
