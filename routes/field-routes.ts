import express from "express";
import Field from "../model/Field";
import {DeleteField, FieldAdd, getAllFields, UpdateField} from "../database/field-prisma-data-store";

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
router.get('/view',async (req,res)=>{
    try {
        const fields=await getAllFields();
        res.json(fields);
    }catch (err){
        console.log("error getting fields",err)
    }

})
router.delete('/delete/:fieldCode',async (req,res)=>{
    const fieldCode: string  = req.params.fieldCode;
    try{
        const deleteField=await DeleteField(fieldCode);
        res.json(deleteField)
    }catch (err){
        console.log("Error deleting Field",err)
    }
})
router.put('/update/:fieldCode',async (req,res)=>{
    const field:Field=req.body;
    const fieldCode: string  = req.params.fieldCode;
    try {
        const updateField=await UpdateField(fieldCode,field);
        res.send(updateField)
    }catch (err){
        console.log("Error updating Field",err)
        res.status(400)
    }

})
export default router