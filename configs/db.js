const mysql = require('mysql')
const pool  = mysql.createPool({
  host            : 'infinity.cdybgosuqxjv.ap-south-1.rds.amazonaws.com',
  user            : 'root',
  password        : 'root1234',
  database        : 'infinity',
})

module.exports = pool
