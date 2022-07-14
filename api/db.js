import knex from "knex";

const db = knex({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "sinsila",
    database: "Baigiamasis",
  },
});

export default db;
