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

        switch (req.body.idCategoria) {
            case 1:
                req.body.img = 'https://www.hojeemdia.com.br/polopoly_fs/1.588863!/image/image.jpg_gen/derivatives/landscape_653/image.jpg'
                break;
            case 2:
                req.body.img = 'https://institutouniversal.vteximg.com.br/arquivos/ids/157070-1000-1000/image_mestre_obras.jpg?v=635369631791130000'
                break;
            case 3:
                req.body.img = 'https://cdn.mamamia.com.au/wp/wp-content/uploads/2019/02/04120205/makeup-pilling.jpg'
                break;
            case 4:
                req.body.img = 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia6218/tarefas-das-empregadas-domesticas-cursos-cpt.jpg'
                break;
        }

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

        switch (req.body.idCategoria) {
            case 1:
                req.body.img = 'https://www.hojeemdia.com.br/polopoly_fs/1.588863!/image/image.jpg_gen/derivatives/landscape_653/image.jpg'
                break;
            case 2:
                req.body.img = 'https://institutouniversal.vteximg.com.br/arquivos/ids/157070-1000-1000/image_mestre_obras.jpg?v=635369631791130000'
                break;
            case 3:
                req.body.img = 'https://cdn.mamamia.com.au/wp/wp-content/uploads/2019/02/04120205/makeup-pilling.jpg'
                break;
            case 4:
                req.body.img = 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia6218/tarefas-das-empregadas-domesticas-cursos-cpt.jpg'
                break;
        }
        
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