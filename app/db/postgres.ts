import { Pool, PoolConfig } from "pg";

// Use a singleton pattern to avoid webpack async dependency issues
class DatabaseConnection {
  private static instance: DatabaseConnection;
  private pool: Pool | null = null;

  private constructor() {}

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public getPool(): Pool {
    if (!this.pool) {
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

      this.pool = new Pool(config);
    }

    return this.pool;
  }

  public async testConnection(): Promise<boolean> {
    try {
      const client = await this.getPool().connect();
      client.release();
      return true;
    } catch (error) {
      console.error("Database connection test failed:", error);
      return false;
    }
  }
}

// Export the connection instance
const dbInstance = DatabaseConnection.getInstance();
export const conn = dbInstance.getPool();

// Export helper function for connection testing
export const testDatabaseConnection = () => dbInstance.testConnection();
