const api = require('../../api/user/userController');

module.exports = (app) => {
    app.route('/user')
        .get(api.authUser)
};