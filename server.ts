import express from 'express';
import fieldRoutes from "./routes/field-routes";
import cropRoutes from "./routes/crop-routes";
import staffRoutes from "./routes/staff-routes";
import vehicleRoutes from "./routes/vehicle-routes";
import equipmentRoutes from "./routes/equipment-routes";
import logRoutes from "./routes/log-routes";
import authRoutes, {authenticateToken} from "./routes/authRoutes";
import dotenv from "dotenv";
import cors from 'cors';
const app = express();
dotenv.config();

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use('/field',fieldRoutes)
app.use('/crop',cropRoutes)
app.use('/staff',staffRoutes)
app.use('/vehicle',vehicleRoutes)
app.use('/equipment',equipmentRoutes)
app.use('/log',logRoutes);
app.use('/auth', authRoutes);

app.listen(3005, (err=>{
    console.log("Server running on port 3002");
}));

app.use('/',(req,res,next)=>{
    res.status(200).send('Not Found');
})


console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);
app.use(authenticateToken);

