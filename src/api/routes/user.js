const api = require('../../api/user/userController');

module.exports = (app) => {
    app.route('/user')
        .post(api.authUser)
};