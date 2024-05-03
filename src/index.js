import express from "express";
import cors from "cors";
import ProvinceRouter from "/src/controllers/province-controller.js"
import {provinces} from "./entities/province.js";
const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS.
app.use(express.json()); // Middleware para parsear y comprender JSON.
//
// Endpoints (todos los Routers)
//
//app.use("/api/province", ProvinceRouter);
//
// Inicio el Server y lo pongo a escuchar.
//
app.use('/api/province', ProvinceRouter)
app.get('/api', async (req, res) => {
    let respuesta;
    const returnArray = await svc.getAllAsync();
    if (returnArray != null){
    respuesta = res.status(200).json(returnArray);
    } else {
    respuesta = res.status(500).send(`Error interno.`);
    }
    return respuesta;
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
0