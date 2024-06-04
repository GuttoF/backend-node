const Agenda = require('../models/Agenda');

function AgendasRepository() {

  async function list() {
    return await Agenda.findAll();
  }

  async function find(id) {
    return await Agenda.findByPk(id);
  }

  async function save(data) {
    return await Agenda.create(data);
  }

  async function update(id, data) {
    return await Agenda.update(data, {
      where: { id: id }
    });
  }

  async function remove(id) {
    return await Agenda.destroy({
      where: { id: id }
    });
  }

  return {
    list,
    find,
    save,
    update,
    remove,
  }
}

module.exports = AgendasRepository();

