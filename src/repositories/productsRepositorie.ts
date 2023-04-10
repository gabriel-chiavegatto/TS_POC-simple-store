import { Product } from "../protocols/product.js";
import { connectionDB } from "../config/database.js";
import { QueryResult } from "pg"

async function createNewProduct(product: Product) {

    const insert = await connectionDB.query(`
        INSERT INTO products (name, price, description, stock, "imageUrl")
        VALUES ($1,$2,$3,$4,$5)
    `, [product.name, product.price, product.description, product.stock, product.imageUrl])
}

async function productsList(): Promise<QueryResult> {
    const list = await connectionDB.query(`
        SELECT * FROM products
    `)
    return list
}

async function updateProduct({id, product}){
    await connectionDB.query(`
        UPDATE products
        SET name = $2,
            price = $3,
            description = $4,
            stock = $5,
            "imageUrl" = $6
        WHERE id = $1
    `,[id, product.name, product.price, product.description, product.stock, product.imageUrl])
    
}

async function deleteProduct(id){
    const {rows} = await connectionDB.query(`
        DELETE FROM products
        WHERE id = $1
    `,[id])
    if(rows.length != 1) throw new Error("Can't delete")
}

export { createNewProduct, productsList, updateProduct, deleteProduct }