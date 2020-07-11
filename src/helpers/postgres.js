const localSettings = require('../../config/environment/localSettings.js');

module.exports = {
    request
};

function request(sqlConfig) {
    if(process.env.NODE_ENV !== 'production')
        Object.assign(sqlConfig, localSettings.sqlConfig);

    const pg = require('smn-pg')(sqlConfig);
    return pg.request();
}