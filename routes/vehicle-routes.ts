import express from "express";
import Vehicle from "../model/Vehicle";
import {DeleteVehicle, getAllVehicles, UpdateVehicle, VehicleAdd} from "../database/vehicle-prisma-data-store";

const router = express.Router();

router.post('/add',async (req,res)=>{
    console.log(req.body);
    const vehicle:Vehicle=req.body;
    try {
        const addVehicle=await VehicleAdd(vehicle);
        res.json(addVehicle)

    }catch (err){
        console.log("Error adding Vehicle",err)
        res.status(400)
    }
})
router.get('/view',async (req,res)=>{
    try {
        const vehicles=await getAllVehicles();
        res.json(vehicles)
    }catch (err){
        console.log("Error getting vehicles",err)
    }

})
router.put('/update/:licensePlateNo',async (req,res)=>{
    const vehicle:Vehicle=req.body;
    const licensePlateNo:string=req.params.licensePlateNo;
    try {
        const updateVehicle=await UpdateVehicle(licensePlateNo,vehicle);
        res.json(updateVehicle)
    }catch (err){
        console.log("Error Updating vehicle",err);
        res.status(400);
    }
})
router.delete('/delete/:licensePlateNo',async (req,res)=>{
    const licensePlateNo:string=req.params.licensePlateNo;
    try {
        const deleteVehicle=await DeleteVehicle(licensePlateNo);
        res.json(deleteVehicle)
    }catch (err){
        console.log("error deleting Vehicle",err)
        res.status(400)
    }
})
export default router