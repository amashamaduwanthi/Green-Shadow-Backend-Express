import {PrismaClient} from "@prisma/client";
import Crop from "../model/Crop";
const prisma = new PrismaClient();
export async function CropAdd(c:Crop){
    try {


        const newCrop = await prisma.crop.create({
            data: {
               cropId:c.cropId,
                cropName:c.cropName,
                cropImage:c.cropName,
                category:c.category,
                season:c.season,
                fieldCode:c.fieldCode
            }

        })
        console.log("Crop Add Successfully");
        return newCrop;
    }catch (err){
        console.log("Crop Add unsuccessfully",err)
    }
}
export async function getAllCrops(){
    try {
        return await prisma.crop.findMany();
    }catch (err){
        console.log("error getting crop data",err)
    }
}
export async function UpdateCrop(cropId:string,c:Crop){
    try {
        const updateCrop=await prisma.crop.update({
            where:{cropId:cropId},
            data:{
               cropName:c.cropName,
                cropImage:c.cropImage,
                category:c.category,
                season:c.season,
                fieldCode:c.fieldCode

            }
        })
        console.log("Crop update successfully")
        return updateCrop
    }catch (err){
        console.log("Crop Update unsuccessfully",err)
    }
}
export async function DeleteCrop(cropId:string){
    try{
        const deleteCrop=await prisma.crop.delete({
            where:{cropId:cropId}
        })
        console.log("Crop delete  Successfully")
        return deleteCrop
    }catch (err){
        console.log("Crop delete Unsuccessfully",err)

    }
}