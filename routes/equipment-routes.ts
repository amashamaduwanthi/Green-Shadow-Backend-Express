import express from "express";
import Equipment from "../model/Equipment";
import {DeleteEquipment, EquipmentAdd, EquipmentUpdate, getAllEquipments} from "../database/equipment-prisma-data-store";

const router = express.Router();

router.post('/add',async (req,res)=>{
    console.log(req.body);
    const equipment:Equipment=req.body;
    try {
        const addEquipment=await EquipmentAdd(equipment);
        res.json(addEquipment)
    }catch (err){
        console.log("Error Adding Equipment",err);
        res.status(400)
    }
})

router.get('/view',async (req,res)=>{
    try{
        const equipments=await getAllEquipments();
        res.json(equipments)
    }catch (err){
        console.log("Error getting Equipments")
    }
})

router.put('/update/:equipmentId',async (req,res)=>{
    const equipment:Equipment=req.body;
    const equipmentId:string=req.params.equipmentId
    try {
        const updateEquipment=await EquipmentUpdate(equipmentId,equipment)
        res.json(updateEquipment)
    }catch (err){
        console.log("Error Updating Equipment");
        res.status(400)
    }
})

router.delete('/delete/:equipmentId',async (req,res)=>{
    const equipmentId:string=req.params.equipmentId
    try {
        const deleteEquipment=await DeleteEquipment(equipmentId);
        res.json(deleteEquipment)
    }catch (err){
        console.log("Error deleting Equipment");
        res.status(400)
    }
})
export default router;