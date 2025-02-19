import express from "express";
import {
    MonitoringLogAdd,
    MonitoringLogDelete,
    MonitoringLogGetAll,
    MonitoringLogUpdate
} from "../database/log-prisma-data-store";


const router = express.Router();

router.post('/add',async (req, res)=>{
    const log = req.body;
    try {
        const addLog = await MonitoringLogAdd(log);
        res.json(addLog);
    }catch (error){
        console.log('error saving monitoring log');
    }
});

router.delete('/delete/:LogCode',async (req, res)=>{
    const LogCode = req.params.LogCode;
    try {
        const deleteLog = await MonitoringLogDelete(LogCode);
        res.json(deleteLog);
    }catch (error) {
        console.log('error deleting log',error);
    }

});

router.get('/view',async (req,res)=>{
    try{
        const log_details = await MonitoringLogGetAll();
        res.json(log_details);
    }catch(error){
        console.log('error fetching data',error);
    }
});


router.put('/update/:LogCode',async (req, res)=>{
    const logCode = req.params.LogCode;
    const log = req.body;
    try{
        const updateLog = await MonitoringLogUpdate(logCode,log);
        res.json(updateLog);
    }catch (error){
        console.log('error updating log',error);
    }

})




export default router;