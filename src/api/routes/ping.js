module.exports = (app) => {
    app.get('/ping', (req, res) => {
        res.json({
            message: 'ServiceAdvisor Online',
            date: new Date()
        });
    });
};