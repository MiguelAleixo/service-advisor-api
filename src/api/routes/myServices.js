const api = require('../../api/myServices/myServicesController');

module.exports = (app) => {
    app.route('/my-services/solicitation/:id')
    .put(api.changeMySolicitationStatus)

    app.route('/my-services/:id')
        .get(api.getMyServices)

    app.route('/my-services/:id')
        .post(api.registerMyServices)

    app.route('/my-services/:id')
        .put(api.changeMyServices)

    app.route('/my-services/:id')
        .delete(api.removeMyServices)
};