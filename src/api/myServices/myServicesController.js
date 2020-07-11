const repository = require('./myServicesRepository');

module.exports = {
    getMyServices,
    registerMyServices,
    changeMyServices,
    removeMyServices
};

async function getMyServices(req, res) {
    try {
        let rtn = await repository.getMyServices(req.params);
        console.log('caiu')
        if (rtn.executionCode !== 0)
            return res.status(200).json(rtn);

        res.json(rtn);
    } catch (err) {
        return res.status(404).json({ err })
    }
}

async function registerMyServices(req, res) {
    try {
        let rtn = await repository.registerMyServices(req.params.id, req.body);

        if (rtn.executionCode !== 0)
            return res.status(200).json(rtn);

        res.json(rtn);
    } catch (err) {
        return res.status(404).json({ err })
    }
}

async function changeMyServices(req, res) {
    try {
        let rtn = await repository.changeMyServices(req.params.id, req.body);

        if (rtn.executionCode !== 0)
            return res.status(200).json(rtn);

        res.json(rtn);
    } catch (err) {
        return res.status(404).json({ err })
    }
}

async function removeMyServices(req, res) {
    try {
        let rtn = await repository.removeMyServices(req.params.id);

        if (rtn.executionCode !== 0)
            return res.status(200).json(rtn);

        res.json(rtn);
    } catch (err) {
        return res.status(404).json({ err })
    }
}