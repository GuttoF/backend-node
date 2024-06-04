const agendasRepository = require("../../repositories/AgendasRepository");

function AgendasController() {

    async function list(req, res) {
        const agendas = await agendasRepository.list();
        res.status(200).json(agendas);
    }

    async function show(req, res) {
        try {
            const agenda = await agendasRepository.find(req.params.id);
            if (!agenda) {
                return res.status(404).send({
                    message: "Contato não encontrado."
            });
        }
        res.status(200).json(agenda);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao buscar o contato"
            });
        }
    }

    async function save(req, res) {
        try {
        const agenda = await agendasRepository.save(req.body);
        res.status(201).json(agenda);
    } catch (error) {
        res.status(400).json(error.details);
        }
    }

    async function update(req, res) {
        const agenda = await agendasRepository.find(req.params.id);
        if (!agenda) {
            return res.status(404).send({
            message: "Contato não encontrado."
        });
        }
        await agendasRepository.update(req.params.id, req.body);
        res.json({
            message: "Contato atualizado."
        });
    }

    async function remove(req, res) {
        const agenda = await agendasRepository.find(req.params.id);
        if (!agenda) {
            return res.status(404).send({
            message: "Contato não encontrado."
        });
    }
        await agendasRepository.remove(req.params.id);
        res.status(200).json({
            message: "Contato removido."
        });
    }

    return {
        save,
        list,
        show,
        remove,
        update,
    }
}

module.exports = AgendasController();
