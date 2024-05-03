import { express } from "express";
import { Router } from "express";
import ProvinceService from './../services/province-service.js'
const svc = new ProvinceService();
let router = Router()


router.get('', async (req, res) => { // EndPoint "/saludar"
    res.status(200).send(provinces);
})
router.get('/:id', async (req, res) => { // EndPoint "/saludar"
    const id = parseInt(req.params.id);    
    const provincia = provinces.find(provincia => provincia.id === id);
    if (provincia) {
        res.status(200).json(provincia);
    } else {
        res.status(404).send("Provincia no encontrada");
    }
})
router.post("", async (req, res) => {
    const {name, full_name, latitude, longitude, display_order } = req.body;
    if (!name || name.length < 3) {
        return res.status(400).send("El nombre de la provincia es inválido.");
    }
    const newProvince = {
        id: provinces.length + 1,
        name: name,
        full_name: full_name,
        latitude: latitude,
        longitude: longitude,
        display_order: display_order
    };
    provinces.push(newProvince);

    res.status(201).send("Provincia insertada correctamente.");
})
router.put('', async (req, res) => {
    const { id, name, full_name, latitude, longitude, display_order } = req.body;
    if (!name || name.length < 3) {
      return res.status(400).send("El nombre de la provincia es inválido.");
    }
    const provNueva = provinces.find(province => province.id === id);
    
    if (!provNueva) {
      return res.status(404).send("No se encontró una provincia con ese ID.");
    }
    provNueva.name = name;
    provNueva.full_name = full_name;
    provNueva.latitude = latitude;
    provNueva.longitude = longitude;
    provNueva.display_order = display_order;

    res.status(201).send("Provincia modificada correctamente.");
})
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const borrar = provinces.findIndex(provincia => provincia.id === id);
  
    if (borrar === -1) {
      return res.status(404).send("No se encontró una provincia con ese ID.");
    }
    provinces.splice(borrar, 1);
    res.status(200).send("Provincia eliminada correctamente.");
});
export default router