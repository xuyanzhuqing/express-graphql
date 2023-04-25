export const mysqlConnectionOpts = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database:'graphql',
    port: 3306
}

export const mysqlPoolOpts = {
    ...mysqlConnectionOpts,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}