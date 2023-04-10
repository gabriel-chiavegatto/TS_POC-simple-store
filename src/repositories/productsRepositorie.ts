import { Product } from "../protocols/product.js";
import { connectionDB } from "../config/database.js";
import { QueryResult } from "pg"

async function createNewProduct(product: Product) {

    const insert = await connectionDB.query(`
        INSERT INTO products (name, price, description, stock, "imageUrl")
        VALUES ($1,$2,$3,$4,$5)
    `, [product.name, product.price, product.description, product.stock, product.imageUrl])
}

async function productsList(): Promise<QueryResult<any>> {
    const list = await connectionDB.query(`
        SELECT * FROM products
    `)
    return list
}

export { createNewProduct, productsList }