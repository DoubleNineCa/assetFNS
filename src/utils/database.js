const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    host: process.env.DB_HOST,
    port:5432,
    user: process.env.DB_USR,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    ssl:{
        rejectUnauthorized: false
    }
    
});

client.on("connect", () => {
    console.log("\rDatabase connection");
});

client.on("end",() => {
    console.log("\rConnection end\n");
})

module.exports = client;

// TABLE SCHEMA
// pool.query(`CREATE TABLE assets (
//     updatedDate timestamp NOT NULL,
//     employee_id VARCHAR (10) NOT NULL,
//     employee_name VARCHAR (50) NOT NULL,
// 	serial_no VARCHAR ( 50 ) PRIMARY KEY UNIQUE NOT NULL,
// 	manufacturer VARCHAR ( 50 ) NOT NULL,
// 	model VARCHAR ( 50 ) NOT NULL,
// 	brand VARCHAR (50) NOT NULL,
//     os VARCHAR (50) NOT NULL,
//     disk VARCHAR (50) NOT NULL,
//     ram VARCHAR (10) NOT NULL,
//     bitdefender VARCHAR (10) NOT NULL    
//     ipAddress VARCHAR(100),
// );`, (err, res) => {
//     console.log(err, res)
//     pool.end()
// })
