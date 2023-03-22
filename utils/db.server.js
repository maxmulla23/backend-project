const { PrismaClient } = require("@prisma/client");

let db;

var __db = PrismaClient || undefined;

if (!__db) {
  const __db = new PrismaClient();
}

db = __db;

module.exports = { db };
