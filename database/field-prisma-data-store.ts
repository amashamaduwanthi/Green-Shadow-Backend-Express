import {PrismaClient} from "@prisma/client";
import Field from "../model/Field";
import exp from "constants";

const prisma = new PrismaClient();

export async function FieldAdd(f:Field){
    try {


        const newField = await prisma.field.create({
            data: {
                fieldCode: f.fieldCode,
                fieldName: f.fieldName,
                location: f.location,
                extendSize: f.extendSize,
                fieldImage: f.fieldImage,
            }

        })
        console.log("Field Add Successfully");
        return newField;
    }catch (err){
        console.log("Field Add unsuccessfully",err)
    }

}
export async function getAllFields(){
    try {
        return await prisma.field.findMany();
    }catch (err){
        console.log("error getting field data",err)
    }
}
export async function DeleteField(fieldCode:string){
    try{
        const deleteField=await prisma.field.delete({
            where:{fieldCode:fieldCode}
        })
        console.log("Field delete  Successfully")
        return deleteField
    }catch (err){
        console.log("Field delete Unsuccessfully",err)

    }
}
export async function UpdateField(fieldCode:string,f:Field){
    try {
        const updateField=await prisma.field.update({
            where:{fieldCode:fieldCode},
            data:{
                fieldName:f.fieldName,
                location:f.location,
                extendSize:f.extendSize,
                fieldImage:f.fieldImage
            }
        })
        console.log("Field update successfully")
        return updateField
    }catch (err){
        console.log("Filed Update unsuccessfully",err)
    }
}
