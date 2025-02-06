import {PrismaClient} from "@prisma/client";
import Crop from "../model/Crop";
import Staff from "../model/Staff";

const prisma = new PrismaClient();
export async function StaffAdd(s:Staff){
    try {


        const newStaff = await prisma.staff.create({
            data: {
                staffId:s.staffId,
                firstName:s.firstName,
                lastName:s.lastName,
                gender:s.gender,
                dob:s.dob,
                contactNo:s.contactNo,
                email:s.email,
                address:s.address,
                role:s.role,
                fieldCode:s.fieldCode
            }

        })
        console.log("Staff Add Successfully");
        return newStaff;
    }catch (err){
        console.log("Staff Add unsuccessfully",err)
    }
}
export async function getAllStaffMembers(){
    try {
        return await prisma.staff.findMany();
    }catch (err){
        console.log("error getting staff data",err)
    }
}
export async function UpdateStaff(staffId:string,s:Staff){
    try {
        const updateStaff=await prisma.staff.update({
            where:{staffId:staffId},
            data:{
                firstName:s.firstName,
                lastName:s.lastName,
                gender:s.gender,
                dob:s.dob,
                contactNo:s.contactNo,
                email:s.email,
                address:s.address,
                role:s.role,
                fieldCode:s.fieldCode

            }
        })
        console.log("Staff update successfully")
        return updateStaff
    }catch (err){
        console.log("Staff Update unsuccessfully",err)
    }
}
export async function DeleteStaff(staffId:string) {
    try {
        const deleteStaff = await prisma.staff.delete({
            where: {staffId: staffId}
        })
        console.log("Staff delete  Successfully")
        return deleteStaff
    } catch (err) {
        console.log("Crop delete Unsuccessfully", err)

    }
}