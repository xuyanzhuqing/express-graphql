import mysql from 'mysql2/promise'
// get the promise implementation, we will use bluebird
import bluebird from 'bluebird'
import { mysqlConnectionOpts, mysqlPoolOpts } from '../conf/db'


const sql = [
  'SELECT * FROM `course` WHERE `course` = ? AND `score` > ?',
  ['数学', 45],
]
// create the connection, specify bluebird as Promise
const connection = await mysql.createConnection({ ...mysqlConnectionOpts, Promise: bluebird });

// query database
const [rows, fields] = await connection.execute(...sql);

console.log(rows, fields)

connection.end()