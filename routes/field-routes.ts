import express from "express";
import Field from "../model/Field";
import {FieldAdd} from "../database/field-prisma-data-store";

const router = express.Router();
router.post('/add',async (req,res)=>{
    console.log(req.body);
    const field:Field=req.body;
    try {
        const addField=await FieldAdd(field);
        res.json(addField)
    }catch (err){
        console.log("Error Adding Fields",err);
        res.send("Error Adding Field").status(400);
    }
})
export default router