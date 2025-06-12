import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from 'better-sqlite3';
import { resolve } from 'path';
import { postsTable } from './schema';

const sqliteDbBasePath = resolve(process.cwd(), 'db.sqlite3');
const sqliteDatabase = new Database(sqliteDbBasePath);

export const drizzleDb = drizzle(sqliteDatabase, {
    schema: {
        posts: postsTable,
    },
    logger: true
});