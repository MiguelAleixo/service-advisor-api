const repository = require('./myServicesRepository');

module.exports = {
    getMyServices,
    registerMyServices,
    changeMyServices,
    removeMyServices,
    changeMySolicitationStatus
};

async function getMyServices(req, res) {
    try {
        let rtn = await repository.getMyServices(req.params);
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
                let tec = [
                    'https://www.hojeemdia.com.br/polopoly_fs/1.588863!/image/image.jpg_gen/derivatives/landscape_653/image.jpg',
                    'https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2018/04/185371-entenda-os-beneficios-da-relacao-da-tecnologia-e-design-1.jpg',
                    'https://www.siteware.com.br/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg',
                ]
                req.body.img = tec[Math.floor(Math.random() * tec.length)]
                break;
            case 2:
                let work = [
                    'https://institutouniversal.vteximg.com.br/arquivos/ids/157070-1000-1000/image_mestre_obras.jpg?v=635369631791130000',
                    'https://scontent.frao1-1.fna.fbcdn.net/v/t1.0-9/42276767_242130869740479_7193186157616693248_n.png?_nc_cat=107&_nc_sid=dd9801&_nc_eui2=AeHhVAOYzC9Ub_u3BlkcWfGczbmyYQT7bHrNubJhBPtsesG1WK1ea1ysmu7d7EhjSyEB892FEG_x5sn_KcQfFlof&_nc_ohc=X4Eh6HU4ofsAX_3AYfI&_nc_ht=scontent.frao1-1.fna&oh=49778e6ca03943c0ab640e5e27f4950e&oe=5F3CE680',
                    'https://www.sistemafiemt.com.br/senai/combos/combos/5.jpg',
                ]
                req.body.img = work[Math.floor(Math.random() * work.length)]
                break;
            case 3:
                let beauty = [
                    'https://cdn.mamamia.com.au/wp/wp-content/uploads/2019/02/04120205/makeup-pilling.jpg',
                    'https://www.colegioweb.com.br/wp-content/uploads/2014/03/Beleza-Homem.jpg',
                    'https://www.minasdefato.com.br/wp-content/uploads/2018/12/Tratamentos-esteticos-homens-Foto-divulga%C3%A7%C3%A3o.jpg',
                ]
                req.body.img = beauty[Math.floor(Math.random() * beauty.length)]
                break;
            case 4:
                let home = [
                    'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia6218/tarefas-das-empregadas-domesticas-cursos-cpt.jpg',
                    'https://media.gazetadopovo.com.br/haus/2018/12/limpeza-manutencao-piscina-cia-da-piscina-bigstock-352a82f0.jpg',
                    'http://www.nevesplit.com.br/image/cache/fotos2-600x600.jpg',
                ]
                req.body.img = home[Math.floor(Math.random() * home.length)]
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
                let tec = [
                    'https://www.hojeemdia.com.br/polopoly_fs/1.588863!/image/image.jpg_gen/derivatives/landscape_653/image.jpg',
                    'https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2018/04/185371-entenda-os-beneficios-da-relacao-da-tecnologia-e-design-1.jpg',
                    'https://www.siteware.com.br/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg',
                ]
                req.body.img = tec[Math.floor(Math.random() * tec.length)]
                break;
            case 2:
                let work = [
                    'https://institutouniversal.vteximg.com.br/arquivos/ids/157070-1000-1000/image_mestre_obras.jpg?v=635369631791130000',
                    'https://scontent.frao1-1.fna.fbcdn.net/v/t1.0-9/42276767_242130869740479_7193186157616693248_n.png?_nc_cat=107&_nc_sid=dd9801&_nc_eui2=AeHhVAOYzC9Ub_u3BlkcWfGczbmyYQT7bHrNubJhBPtsesG1WK1ea1ysmu7d7EhjSyEB892FEG_x5sn_KcQfFlof&_nc_ohc=X4Eh6HU4ofsAX_3AYfI&_nc_ht=scontent.frao1-1.fna&oh=49778e6ca03943c0ab640e5e27f4950e&oe=5F3CE680',
                    'https://www.sistemafiemt.com.br/senai/combos/combos/5.jpg',
                ]
                req.body.img = work[Math.floor(Math.random() * work.length)]
                break;
            case 3:
                let beauty = [
                    'https://cdn.mamamia.com.au/wp/wp-content/uploads/2019/02/04120205/makeup-pilling.jpg',
                    'https://www.colegioweb.com.br/wp-content/uploads/2014/03/Beleza-Homem.jpg',
                    'https://www.minasdefato.com.br/wp-content/uploads/2018/12/Tratamentos-esteticos-homens-Foto-divulga%C3%A7%C3%A3o.jpg',
                ]
                req.body.img = beauty[Math.floor(Math.random() * beauty.length)]
                break;
            case 4:
                let home = [
                    'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia6218/tarefas-das-empregadas-domesticas-cursos-cpt.jpg',
                    'https://media.gazetadopovo.com.br/haus/2018/12/limpeza-manutencao-piscina-cia-da-piscina-bigstock-352a82f0.jpg',
                    'http://www.nevesplit.com.br/image/cache/fotos2-600x600.jpg',
                ]
                req.body.img = home[Math.floor(Math.random() * home.length)]
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

async function changeMySolicitationStatus(req, res) {
    try {
        let rtn = await repository.changeMySolicitationStatus(req.params.id, req.body);
        if (rtn.executionCode !== 0)
            return res.status(200).json(rtn);

        res.json(rtn);
    } catch (err) {
        return res.status(404).json({ err })
    }
}