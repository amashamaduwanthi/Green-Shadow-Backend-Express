import express from 'express';
import fieldRoutes from "./routes/field-routes";
import cropRoutes from "./routes/crop-routes";
import staffRoutes from "./routes/staff-routes";
import vehicleRoutes from "./routes/vehicle-routes";
import equipmentRoutes from "./routes/equipment-routes";
import logRoutes from "./routes/log-routes";
const app = express();

app.use(express.json())
app.use('/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})
app.use('/field',fieldRoutes)
app.use('/crop',cropRoutes)
app.use('/staff',staffRoutes)
app.use('/vehicle',vehicleRoutes)
app.use('/equipment',equipmentRoutes)
app.use('/log',logRoutes);

app.listen(3005, (err=>{
    console.log("Server running on port 3002");
}));

app.use('/',(req,res,next)=>{
    res.status(200).send('Not Found');
})

