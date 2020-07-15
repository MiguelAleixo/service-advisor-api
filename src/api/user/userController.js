const repository = require('./userRepository');

module.exports = {
    authUser
};

async function authUser(req, res) {
    console.log('autentica')
    try {
        let rtn = await repository.authUser(req.body);

        if (rtn.executionCode !== 0)
            return res.status(200).json(rtn);

        res.json(rtn);
    } catch (err) {
        return res.status(404).json({ err })
    }
}