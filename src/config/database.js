module.exports = {
    dialect : 'postgres',
    host: 'localhost',
    port: '3333',
    username: 'postgres',
    password: 'ab290499',
    database: 'sqlnode',
    define: {
        // created_at, updated_at
        timestamps: true,
        underscored: true,
    },
};