// http://vitaly-t.github.io/pg-promise/module-pg-promise.html
const pgp = require("pg-promise")();
require("dotenv").config();

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env;
// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
    };

// alt from express docs
// const db = pgp('postgres://username:password@host:port/database')
// const db = pgp('postgres://icripfxvwshhjt:1cb8cc2b962cdcf02f1e17b2dc7f5c27d12ee21befcdfbf69de45be017c992d1@ec2-34-233-157-189.compute-1.amazonaws.com:5432/df8c8dge6evd82')

const db = pgp(cn);

module.exports = db;
