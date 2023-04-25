// async await usage
import { mysqlConnectionOpts, mysqlPoolOpts } from '../conf/db'

const sql = [
  'SELECT * FROM `course` WHERE `course` = ? AND `score` > ?',
  ['数学', 45],
]

// import mysql from 'mysql2/promise'
// async function main() {
//   const connection = await mysql.createConnection(mysqlConnectionOpts);

//   const [rows, fields] = await connection.execute(
//     'SELECT * FROM `course` WHERE `course` = ? AND `score` > ?',
//     ['数学', 45],
//   );

//   console.info(rows)
// }

// create the connection
// import mysql from 'mysql2'
// async function main () {
//   const con = mysql.createConnection(mysqlConnectionOpts);
//   con.promise().query(...sql)
//     .then( ([rows,fields]) => {
//       console.log(rows);
//     })
//     .catch(console.log)
//     .then( () => con.end());
// }

//----------------------------------------------------------------
// import mysql from 'mysql2'
// async function main() {
//   // get the client
//   // create the pool
//   const pool = mysql.createPool(mysqlPoolOpts);
//   // now get a Promise wrapped instance of that pool
//   const promisePool = pool.promise();
//   // query database using promises
//   const [rows,fields] = await promisePool.query(
//     'SELECT * FROM `course` WHERE `course` = ? AND `score` > ?',
//     ['数学', 45],
//   )

//   console.info(rows)
// }

main()