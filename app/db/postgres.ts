// import postgres from 'postgres';

// export const sql = postgres(process.env.POSTGRES_URL!, {
//   ssl: 'allow',
// });


import { Pool } from "pg";

let conn: any;

if (!conn) {
  conn = new Pool({
    user: process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    host: process.env.POSTGRES_DB_HOST,
    // port: parseInt(process.env.POSTGRES_DB_PORT!, 10),
    port: parseInt(process.env.POSTGRES_DB_PORT || "", 10),
    database: process.env.POSTGRES_DB_DATABASE,
  });
}

export { conn };