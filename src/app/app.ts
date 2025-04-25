import express from 'express';
import cors from 'cors';
import Userrouter from '@/routes/v1/user.route';
import healthRouter from '@/routes/v1/health';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();


const app = express();

// Middleware
app.use(morgan('combined'));
app.use(cors());
app.use("/user",Userrouter)
app.use("/health",healthRouter)
app.use(express.json());

export default app;