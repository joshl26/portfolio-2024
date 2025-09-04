import { Pool } from "pg";

let conn: Pool | null = null;

export async function getConnection(): Promise<Pool> {
  if (!conn) {
    conn = new Pool({
      user: process.env.POSTGRES_DB_USERNAME,
      password: process.env.POSTGRES_DB_PASSWORD,
      host: process.env.POSTGRES_DB_HOST,
      port: parseInt(process.env.POSTGRES_DB_PORT || "5432", 10),
      database: process.env.POSTGRES_DB_DATABASE,
      // Additional connection options for better reliability
      max: 20, // Maximum number of clients in the pool
      idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
      connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
    });

    // Test the connection
    try {
      const client = await conn.connect();
      client.release(); // Release the test client back to the pool
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection failed:", error);
      conn = null; // Reset conn to null on failure
      throw error;
    }
  }

  return conn;
}

// Initialize connection on module load
let connectionPromise: Promise<Pool> | null = null;

export function getConnectionSync(): Pool {
  if (!conn) {
    throw new Error(
      "Database connection not initialized. Call getConnection() first."
    );
  }
  return conn;
}

// For immediate use without async/await
export async function initializeConnection(): Promise<Pool> {
  if (!connectionPromise) {
    connectionPromise = getConnection();
  }
  return connectionPromise;
}
