import express from "express"
import {test} from "../controller/user.controller.js"

const router = express.Router()

// router.get("/",(req,res)=>{
//     res.json({
//         message:"router is working"
//     })
// }) 

//adding function in the controller

router.get("/",test)

export default router