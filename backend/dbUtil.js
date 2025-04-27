const mysql = require('mysql2');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'qawsed1',
    database: 'login_info'
})
module.exports = db.promise();