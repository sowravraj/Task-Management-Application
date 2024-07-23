import express from "express"
import mongoose from "mongoose"
const app = express()
import dotenv from "dotenv"
dotenv.config()
// app.use(express.json())

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

