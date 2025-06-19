import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/db.js'
import userRoute from './routes/user.route.js'
import companyRoute from './routes/company.route.js'
import jobRoute from './routes/job.route.js';
import applicationRoute from './routes/application.route.js'
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin:[
        'http://localhost:5173',
        'https://jobportal-md7z.onrender.com',       // your backend
        'https://jobportal-frontend-ne7v.onrender.com' // your frontend
    ],
    credentials:true
}

app.use(cors(corsOptions));


connectDB();


app.get("/",(req,res)=>{
    res.send("Hello world")
})


const PORT = process.env.PORT || 3000;

app.use("/api/user",userRoute)
app.use("/api/company",companyRoute)
app.use("/api/job",jobRoute)
app.use("/api/application",applicationRoute)





app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
