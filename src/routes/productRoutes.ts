import { Router } from "express";
import productsControllers from "../controllers/productsControllers.js";

const routes = Router()

routes.get("/", (req,res)=>{console.log("Hello dev"); res.send("Hello World")})

routes.post("/product", productsControllers.create);
routes.get("/product", productsControllers.getProducts)
routes.post("/product/edit/:id", productsControllers.edit);
routes.delete("/product/:id", productsControllers.remove)

routes.put("/product/decreaseItem/:id", productsControllers.decreaseItens);
routes.put("/product/addItem/:id",productsControllers.addItens)


export default routes