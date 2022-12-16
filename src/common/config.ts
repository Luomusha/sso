export const MYSQL_USERNAME = process.env.MYSQL_USERNAME || "root";
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "root";
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "db";
export const MYSQL_PORT = Number(process.env.MYSQL_PORT) || 3306;
export const MYSQL_HOST = process.env.MYSQL_HOST || "localhost";

export const PRIVATE_KEY = process.env.PRIVATE_KEY || "private.pem"
export const PUBLIC_KEY = process.env.PUBLIC_KEY || "public.pem"
