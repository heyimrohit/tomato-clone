import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'));
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})