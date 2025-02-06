import {PrismaClient} from "@prisma/client";
import Vehicle from "../model/Vehicle";

const prisma = new PrismaClient();

export async function VehicleAdd(v:Vehicle){
    try {
        const newVehicle=await prisma.vehicle.create({
            data:{
                vehicleCode:v.vehicleCode,
                licensePlateNo:v.licensePlateNo,
                category:v.category,
                fuelType:v.fuelType,
                status:v.status,
                remarks:v.remarks,
                staffId:v.staffId
            }
        })
        console.log("Vehicle add successfully")
        return newVehicle;
    }catch (err){
        console.log("error adding Vehicle",err)
    }
}
export async function getAllVehicles(){
    try {
        return await prisma.vehicle.findMany();
    }catch (err){
        console.log("vehicle fetching not successfully")
    }
}
export async function UpdateVehicle(licensePlateNo:string,v:Vehicle){
    try {
        const updateVehicle=await prisma.vehicle.update({
            where:{licensePlateNo:licensePlateNo},
            data:{
                vehicleCode:v.vehicleCode,
                category:v.category,
                fuelType:v.fuelType,
                status:v.status,
                remarks:v.remarks,
                staffId:v.staffId
            }
        })
        console.log("vehicle update successfully");
        return updateVehicle
    }catch (err){
        console.log("vehicle update unsuccessfully")
    }
}
export async function DeleteVehicle(licensePlateNo:string){
    try {
        const deleteVehicle=await prisma.vehicle.delete({
            where:{licensePlateNo:licensePlateNo}
        })
        console.log("Vehicle delete successfully")
        return deleteVehicle
    }catch (err){
        console.log("vehicle delete unsuccessfully",err)
    }
}

