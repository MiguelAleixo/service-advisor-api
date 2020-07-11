const pg = require('../../helpers/postgres');

module.exports = {
    getMyServices,
    registerMyServices,
    changeMyServices,
    removeMyServices,
};

const procs = {
    getMyServices: 'public.selectMyService',
    registerMyServices: 'public.registerMyService',
    changeMyServices: 'public.updateMyService',
    removeMyServices: 'public.deleteMyService'
};

async function getMyServices(obj) {
    return pg.request(global.sql)
        .input('pIdUser', obj.id)
        .asyncExec(procs.getMyServices);
}

async function registerMyServices(id, obj) {
    return pg.request(global.sql)
        .input('pIdUser', id)
        .input('pNome', obj.nome)
        .input('pDesc', obj.descricao)
        .input('pIdCategoria', obj.idCategoria)
        .input('pIdTempo', obj.idTempo)
        .input('pIdValor', obj.idValor)
        .asyncExec(procs.registerMyServices);
}

async function changeMyServices(id, obj) {
    return pg.request(global.sql)
        .input('pIdService', id)
        .input('pNome', obj.nome)
        .input('pDesc', obj.descricao)
        .input('pIdCategoria', obj.idCategoria)
        .input('pIdTempo', obj.idTempo)
        .input('pIdValor', obj.idValor)
        .asyncExec(procs.changeMyServices);
}

async function removeMyServices(id) {
    return pg.request(global.sql)
        .input('pIdService', id)
        .asyncExec(procs.removeMyServices);
}