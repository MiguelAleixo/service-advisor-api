const config = {
    "sqlConfig" : {
        "user" : "postgres",
        "password" : "postgres",
        "host" : "localhost",
        "port" : 5432,
        "database" : "service_advisor_db",
        "max" : 10,
        "idleTimeoutMillis" : 30000
    },
}

global.sql = config;

module.exports = config;