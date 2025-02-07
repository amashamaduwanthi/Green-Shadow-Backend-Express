import {PrismaClient} from "@prisma/client";
import Equipment from "../model/Equipment";
import exp from "constants";

const prisma = new PrismaClient();

export async function EquipmentAdd(e:Equipment){
    try {
        const newEquipment=await prisma.equipment.create({
            data:{
                equipmentId:e.equipmentId,
               name:e.name,
               type:e.type,
               status:e.status,
               fieldCode:e.fieldCode,
               staffId:e.staffId}
        })
        console.log("Equipment Add Successfully")
        return newEquipment
    }catch (err){
        console.log("Equipment adding Unsuccessfully",err)
    }
}
export async function getAllEquipments(){
    try {
        return  await prisma.equipment.findMany()
    }catch (err){
        console.log("Error fetching Equipment",err)
    }
}

export async function EquipmentUpdate(equipmentId:string,e:Equipment){
    try {
        const updateEquipment=await prisma.equipment.update({
            where:{equipmentId:equipmentId},
            data:{ name:e.name,
                type:e.type,
                status:e.status,
                fieldCode:e.fieldCode,
                staffId:e.staffId}
        })
        console.log("Equipment Update Successfully");
        return updateEquipment
    }catch (err){
        console.log("equipment update unsuccessfully ")
    }
}
export async function DeleteEquipment(equipmentId:string){
    try {
        const deleteEquipment=await prisma.equipment.delete({
            where:{equipmentId:equipmentId}
        })
        console.log("Equipment delete successfully")
        return deleteEquipment

    }catch (err){
        console.log("Equipment Delete unsuccessfully",err)
    }

}
