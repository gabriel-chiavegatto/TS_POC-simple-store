import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;

dotenv.config();

export const connectionDB = new Pool({
    connectionString: process.env.DATABASE_CONNECTION,
});
