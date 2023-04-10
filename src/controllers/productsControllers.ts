import { Request, Response } from "express"
import { createNewProduct, productsList } from "../repositories/productsRepositorie.js";
import { Product } from "../protocols/product.js";
import { productSchema } from "../schemas/productSchema.js";

async function create(req: Request, res: Response) {
    try {
        const productReq = req.body as Product;

        const { error } = productSchema.validate(productReq);
        if (error) return res.status(400).send(error.message)
        
        const createdProduct = await createNewProduct(productReq)
        
        res.sendStatus(201)
    } catch (error) {
        res.status(422).send(error.detail)
    }
}
async function getProducts(req: Request, res: Response) {
    try {
        const list = await productsList()
        res.sendStatus(200)
    } catch (error) {
        res.status(422).send(error.detail)
    }
}
async function edit(req: Request, res: Response) {
    try {
        const productId = req.params;
        
        res.sendStatus(200)
    } catch (error) {

        res.sendStatus(422)
    }
}
async function decreaseItens(req: Request, res: Response) {
    try {
        res.sendStatus(422)
    } catch (error) {

        res.sendStatus(422)
    }
}
async function addItens(req: Request, res: Response) {
    try {
        res.sendStatus(200)
    } catch (error) {

        res.sendStatus(422)
    }
}
async function remove(req: Request, res: Response) {
    try {
        res.sendStatus(200)
    } catch (error) {

        res.sendStatus(422)
    }
}

export default { create, getProducts, edit, decreaseItens, addItens, remove }