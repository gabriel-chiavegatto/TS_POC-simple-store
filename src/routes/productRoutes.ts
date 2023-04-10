import { Router } from "express";
import productsControllers from "../controllers/productsControllers.js";

const routes = Router()

routes.get("/", (req,res)=>{console.log("Hello dev"); res.send("Hello World")})
routes.post("/newProduct", productsControllers.create);
routes.post("/store", productsControllers.getProducts)
routes.put("/editProduct", productsControllers.edit);
routes.put("/decreaseItem", productsControllers.decreaseItens);
routes.put("/addItem",productsControllers.addItens)
routes.delete("/remove", productsControllers.remove)

export default routes