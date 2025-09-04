import type { Pool, PoolConfig, QueryResult } from "pg";

let pool: Pool | null = null;

// Lazy load pg module to avoid webpack issues
async function getPgPool(): Promise<Pool> {
  if (pool) return pool;

  // Dynamic import to avoid webpack async dependency issues
  const { Pool } = await import("pg");

  const config: PoolConfig = {
    user: process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    host: process.env.POSTGRES_DB_HOST,
    port: parseInt(process.env.POSTGRES_DB_PORT || "5432", 10),
    database: process.env.POSTGRES_DB_DATABASE,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  };

  pool = new Pool(config);
  return pool;
}

// Main query function
export async function query(
  text: string,
  params?: any[]
): Promise<QueryResult> {
  const pgPool = await getPgPool();
  return pgPool.query(text, params);
}

// Test connection function
export async function testDatabaseConnection(): Promise<boolean> {
  try {
    const pgPool = await getPgPool();
    const client = await pgPool.connect();
    client.release();
    return true;
  } catch (error) {
    console.error("Database connection test failed:", error);
    return false;
  }
}

// For backward compatibility with existing code
export const conn = {
  query: async (text: string, params?: any[]) => {
    return query(text, params);
  },
};

// Cleanup function for graceful shutdown
export async function closeConnection(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
