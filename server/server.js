import express from "express";
import notfoundMiddleware from "./middlewares/notfoundMiddle.js"
import errorhandlerMiddleware from "./middlewares/errorhandleMiddle.js"
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import bookRouter from "./routes/api/bookApi.js"
import cors from 'cors'

const app=express();

connectDB();
app.get('/',(req,res)=>{
    res.send('Welcome!')
})
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/v1/books',bookRouter)
app.use(notfoundMiddleware);
app.use(errorhandlerMiddleware);

dotenv.config()
const port= process.env.PORT || 5000;
app.listen(port,()=> console.log(`Server is listening ${port}.`))