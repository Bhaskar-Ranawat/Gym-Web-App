import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'

const app = express();
const router = express.Router();

// this is important to use dotenv file variables
config({ path: "./config.env"})

// console.log(process.env.PORT)

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods:["POST"],
    credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// line below is very important to use router
// app.use(router);
// router.get('/', (req, res)=>{
//     // res.send("Hello from router");
//     res.json({
//         success: true,
//         message: "WELCOME ABOARD!"
//     })
// })

app.get('/', (req, res)=>{
    res.json(
        {
            success:true,
            message: "Welcome to the server"
        }
    )
})

import emailRoute from './routes/emailRoute.js'
app.use("/email", emailRoute)

app.listen(process.env.PORT, ()=>{
    console.log(process.env.FRONTEND_URL)
    console.log(`Server is running on port ${process.env.PORT}`);
})