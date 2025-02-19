import { PrismaClient} from "@prisma/client";
import MonitoringLog from "../model/Log";


const prisma = new PrismaClient();

export async function MonitoringLogAdd(log:MonitoringLog) {
    try {
        const addedLog = await prisma.monitoringLog.create({
            data: {
                LogCode: log.LogCode,
                date: log.date,
                observation: log.observation,
                LogImage: log.LogImage
            }
        })
        console.log('Log added successfully', addedLog);
        return addedLog;
    }catch (error){
        console.log('error adding log',error);
    }
}

export async function MonitoringLogDelete(LogCode:string){
    try {
        const deletedLog=await prisma.monitoringLog.delete({
            where:{LogCode:LogCode}
        });
        console.log('Log deleted :',LogCode);
        return deletedLog;
    }catch (error){
        console.log("error deleting Log", error);
    }
}

export async function MonitoringLogGetAll(){
    try{
        return await prisma.monitoringLog.findMany();
    }catch (error) {
        console.log("error fetching data",error);
    }
}
export async function MonitoringLogUpdate(logCode:string,log:MonitoringLog){
    try {
        const updatedLog=await prisma.monitoringLog.update({
            where:{LogCode:logCode},
            data:{
                date:log.date,
                observation:log.observation,
                LogImage:log.LogImage
            }
        });
        console.log("log updated successfully",updatedLog);
        return updatedLog;
    }catch (error) {
        console.log('error updating monitoring log data',error);
    }
}