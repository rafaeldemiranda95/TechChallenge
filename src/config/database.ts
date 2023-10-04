import { PrismaClient } from '@prisma/client';

import { Client, Pool } from 'pg';
export const prisma = new PrismaClient();

const client = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'Teste',
  user: 'postgres',
  password: '',
});

export const runQuery = async (query: string) => {
  await client.connect();
  const res = await client.query(query);
  let result = res;
  //   await client.end();
  return result.rows;
};
