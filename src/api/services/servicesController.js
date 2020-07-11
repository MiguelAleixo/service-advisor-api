const repository = require('./servicesRepository');

module.exports = {
    getServices
};

async function getServices(req, res) {
    try {
        let rtn = await repository.getServices(req.params);

        if (rtn.executionCode !== 0)
            return res.status(200).json(rtn);

        res.json(rtn);
    } catch (err) {
        return res.status(404).json({ err })
    }
}