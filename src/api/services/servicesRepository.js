const pg = require('../../helpers/postgres');

module.exports = {
    getServices,
    getSolicitationService,
    solicitService
};

const procs = {
    getServices: 'public.selectService',
    getSolicitationService: 'public.selectMySolicitation',
    solicitService: 'public.registerSolicitation'
};

async function getServices(obj) {
    return pg.request(global.sql)
        .input('pIdUser', obj.id)
        .input('pIdCategory', obj.idCategory)
        .asyncExec(procs.getServices);
}

async function getSolicitationService(obj) {
    return pg.request(global.sql)
        .input('pIdUser', obj.id)
        .asyncExecOne(procs.getSolicitationService);
}

async function solicitService(id, obj) {
    return pg.request(global.sql)
    .input('pIdUser', id)
    .input('pIdServico', obj.idService)
    .input('pMensagem', obj.message)
    .asyncExec(procs.solicitService);
}
