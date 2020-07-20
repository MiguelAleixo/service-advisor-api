const repository = require('./servicesRepository');

module.exports = {
    getServices,
    getSolicitationService,
    solicitService
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

async function getSolicitationService(req, res) {
    try {
        let rtn = await repository.getSolicitationService(req.params);

        if (rtn.executionCode !== 0)
            return res.status(200).json(rtn);

        res.json(rtn);
    } catch (err) {
        return res.status(404).json({ err })
    }
}

async function solicitService(req, res) {
    try {
        let rtn = await repository.solicitService(req.params.id, req.body);

        if (rtn.executionCode !== 0)
            return res.status(200).json(rtn);

        res.json(rtn);
    } catch (err) {
        return res.status(404).json({ err })
    }
}