import express from "express";
import Crop from "../model/Crop";
import {CropAdd, DeleteCrop, getAllCrops, UpdateCrop} from "../database/crop-prisma-data-store";


const router = express.Router();
router.post('/add',async (req,res)=>{
    console.log(req.body);
    const crop:Crop=req.body;
    try {
        const addCrop=await CropAdd(crop);
        res.json(addCrop)
    }catch (err){
        console.log("Error Adding crop",err);
        res.send("Error Adding crop").status(400);
    }
})

router.get('/view',async (req,res)=>{
    try {
        const crops=await getAllCrops();
        res.json(crops);
    }catch (err){
        console.log("error getting crops",err)
    }

})
router.put('/update/:cropId',async (req,res)=>{
    const crop:Crop=req.body;
    const cropId: string  = req.params.cropId;
    try {
        const updateCrop=await UpdateCrop(cropId,crop);
        res.send(updateCrop)
    }catch (err){
        console.log("Error updating Crop",err)
        res.status(400)
    }

})
router.delete('/delete/:cropId',async (req,res)=>{
    const cropId: string  = req.params.cropId;
    try{
        const deleteCrop=await DeleteCrop(cropId);
        res.json(deleteCrop)
    }catch (err){
        console.log("Error deleting crop",err)
    }
})
export default router