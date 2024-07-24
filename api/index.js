import express from "express"      //  "type": "module",
import mongoose from "mongoose"
const app = express()
import dotenv from "dotenv"
dotenv.config()
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB is Connected");
})
.catch((err)=>{
    console.log(err);
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on the ${process.env.PORT}`);
})

// Create a test API route
// app.get("/",(req,res)=>{
//     res.json({message:"API is working"})
// })

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)
