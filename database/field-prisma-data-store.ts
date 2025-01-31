import {PrismaClient} from "@prisma/client";
import Field from "../model/Field";

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
