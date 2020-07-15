const pg = require('../../helpers/postgres');

module.exports = {
    getServices
};

const procs = {
    getServices: 'public.selectService',
};

async function getServices(obj) {
    return pg.request(global.sql)
        .input('pIdUser', obj.id)
        .input('pIdCategory', obj.idCategory)
        .asyncExec(procs.getServices);
}
