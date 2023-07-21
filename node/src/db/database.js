const mysql = require('mysql2/promise');

// create the connection to database
let connection;

async function authenticate() {
    connection = await mysql.createConnection({
        host: 'database',
        user: 'root',
        database: 'nodedb',
        password: 'root'
      });
    
      return `Connection established to database`;
}

async function initateDatabase() {
    await connection.query(`CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, PRIMARY KEY (id))`);
    await connection.query(`INSERT INTO people (name) VALUES ('João'), ('Maria'), ('José'), ('Pedro'), ('Paulo'), ('Lucas'), ('Mateus'), ('Marcos'), ('Tiago'), ('Judas')`);
}

async function getNamesFromDatabase() {
    const [rows] = await connection.query('SELECT * FROM people');
    console.log(rows);
    return rows;
}

module.exports = { authenticate, initateDatabase, getNamesFromDatabase };
