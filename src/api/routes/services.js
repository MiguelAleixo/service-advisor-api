const api = require('../../api/services/servicesController');

module.exports = (app) => {

    app.route('/services/solicitation/:id')
        .get(api.getSolicitationService)

    app.route('/services/solicitation/:id')
        .post(api.solicitService)
        
    app.route('/services/:id/:idCategory')
        .get(api.getServices)
};