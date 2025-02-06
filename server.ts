import express from 'express';
import fieldRoutes from "./routes/field-routes";
import cropRoutes from "./routes/crop-routes";
const app = express();

app.use(express.json())
app.use('/field',fieldRoutes)
app.use('/crop',cropRoutes)

app.listen(3002, (err=>{
    console.log("Server running on port 3002");
}));

app.use('/',(req,res,next)=>{
    res.status(200).send('Not Found');
})

