const api = require('../../api/services/servicesController');

module.exports = (app) => {
    app.route('/services/:id')
        .get(api.getServices)
};