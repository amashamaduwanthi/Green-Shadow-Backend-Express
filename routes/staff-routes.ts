import express from "express";
import Crop from "../model/Crop";
import {CropAdd, DeleteCrop, getAllCrops, UpdateCrop} from "../database/crop-prisma-data-store";
import Staff from "../model/Staff";
import {DeleteStaff, getAllStaffMembers, StaffAdd, UpdateStaff} from "../database/staff-prisma-data-store";

const router = express.Router();
router.post('/add',async (req,res)=>{
    console.log(req.body);
    const staff:Staff=req.body;
    try {
        const addStaff=await StaffAdd(staff);
        res.json(addStaff)
    }catch (err){
        console.log("Error Adding staff",err);
        res.send("Error Adding staff").status(400);
    }
})
router.get('/view',async (req,res)=>{
    try {
        const staffs=await getAllStaffMembers();
        res.json(staffs);
    }catch (err){
        console.log("error getting staffs",err)
    }

})
router.put('/update/:staffId',async (req,res)=>{
    const staff:Staff=req.body;
    const staffId: string  = req.params.staffId;
    try {
        const updateStaff=await UpdateStaff(staffId,staff);
        res.send(updateStaff)
    }catch (err){
        console.log("Error updating Crop",err)
        res.status(400)
    }

})
router.delete('/delete/:staffId',async (req,res)=>{
    const staffId: string  = req.params.staffId;
    try{
        const deleteStaff=await DeleteStaff(staffId);
        res.json(deleteStaff)
    }catch (err){
        console.log("Error deleting staff",err)
    }
})
export default router