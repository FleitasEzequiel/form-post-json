const mysql2 = require("mysql2/promise");
const createDB = async () =>{
    const connection = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "establecimiento_parcela_cultivo"
    })
/*const [results,fields] = await connection.query(`INSERT INTO usuarios (nickname,nombre,email)
VALUES (?,?,?)`, "eze", "eze2", "ezegmail.com")*/
return connection;
}

module.exports = {createDB};
