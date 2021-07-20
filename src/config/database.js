module.exports = {
    dialect : 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'sqlnode',
    define: {
        // created_at, updated_at
        timestamps: true,
        underscored: true,
    },
};