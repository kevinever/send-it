import { Pool } from 'pg';

//const pool = new Pool();

/*
* For this this work, I've created a .env file and assigned values
* to properties like PGHOST, PGPORT, PGUSER, PGPASSWORD, and PGDATABASE
* I've also installed dotenv and called dotenv.config(); when the
* server is starting up. dotenv.config(); ensures the properties
* defined in the .env file are available to the app as it runs
*/



const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
});

const connect = async () => pool.connect();

const execute = async (sql, data = []) => {
  const connection = await connect();
  try {
    return await connection.query(sql, data);
  } catch (error) {
   return error;
  } finally {
    connection.release();
  }
};

export default execute;