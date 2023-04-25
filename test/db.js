import mysql from 'mysql2'
import { mysqlConnectionOpts, mysqlPoolOpts } from '../conf/db'

// 创建一个数据库连接
// const connection = mysql.createConnection(mysqlConnectionOpts);

// // ----------------------------------------------------------------
// // 简单查询
// connection.query(
//   'SELECT * FROM `course` WHERE `course` = "数学" AND `score` > 50',
//   function(err, results, fields) {
//     console.log(results); // 结果集
//     console.log(fields); // 额外的元数据（如果有的话）
//   }
// );

// // ----------------------------------------------------------------
// // 使用占位符
// connection.query(
//   'SELECT * FROM `course` WHERE `course` = ? AND `score` > ?',
//   ['数学', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );

// // ----------------------------------------------------------------
// // execute 将在内部调用 prepare 和 query
// connection.execute(
//   'SELECT * FROM `course` WHERE `course` = ? AND `score` > ?',
//   ['数学', 45],
//   function(err, results, fields) {
//     console.log(results); // 结果集
//     console.log(fields); // 额外元数据（如果有）

//     // 如果再次执行相同的语句，他将从缓存中选取
//     // 这能有效的节省准备查询时间获得更好的性能
//   }
// );

// // 创建连接池，设置连接池的参数
const pool = mysql.createPool(mysqlPoolOpts);

// pool.query("SELECT * FROM course", function(err, rows, fields) {
//   // Connection is automatically released when query resolves
//   console.info(rows)
// })

pool.getConnection(function(err, conn) {
  if (err) {
    console.info('error occurred while getting connection')
  }

  // Do something with the connection
  conn.query("SELECT * FROM course", function(err, rows, fields) {
    // Connection is automatically released when query resolves
    console.info(rows)
  })
  // Don't forget to release the connection when finished!
  pool.releaseConnection(conn);
})
