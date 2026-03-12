import mysql from 'mysql2/promise.js'

async function getDatabase() {
    try {
        const database = await mysql.createConnection(
            {
                host: 'localhost',
                user: 'root',
                password: 'mikester897',
                database: "test"
            }
        );

        const result = await database.execute('INSERT INTO `user` VALUES (6, "edward", "butteredtoast", "Buttered Toast!")')
        const [column, schema_info] = await database.execute('SELECT * FROM `user`');

        console.log(column);
        console.log("Server status: " + result[0]["serverStatus"]);

        return database;
    } catch (error) {
        console.error(error);
    }
}

async function terminate(database) {
    await database.end();

    console.log("Connection Terminated");
}


const database = await getDatabase();
if (database !== null && database !== undefined) {
    await terminate(database);
}
