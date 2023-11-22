import { Router } from "express";
import authRoutes from './Auth.Routes.js'
const router = Router();


router.get('/auth',authRoutes)