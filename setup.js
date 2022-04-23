const db = require("./config/db");

const tableUsers = `
  CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL,
    "email" VARCHAR(64) NOT NULL,
    "password" VARCHAR(191) NOT NULL,
    PRIMARY KEY ("id")
  );`;

const tableReflections = `
  CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL,
    "success" VARCHAR(100) NOT NULL,
    "low_point" VARCHAR(191) NOT NULL,
    "take_away" VARCHAR(191) NOT NULL,
    "owner_id" INTEGER NOT NULL,
    created_date DATE NOT NULL,
    modified_date DATE NOT NULL,
    PRIMARY KEY ("id")
  );`;

const creatTable = async () =>{
  try {
    const users = await db.query(tableUsers);
    const reflections = await db.query(tableReflections);
    
    console.log(users);
    console.log(reflections);
  }catch(e) {
    console.log(e.message)
  }
}

creatTable()