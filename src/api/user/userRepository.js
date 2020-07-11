const pg = require('../../helpers/postgres');

module.exports = {
    authUser
};

const procs = {
    authUser: 'public.authuser',
};

async function authUser(obj) {
    return pg.request(global.sql)
        .input('pLogin', obj.login)
        .input('pSenha', obj.password)
        .asyncExecOne(procs.authUser);
}
