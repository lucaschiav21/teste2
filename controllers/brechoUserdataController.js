const brechoUserdataModel = require("../models/brechoLoginModel");
class BrechoUserdataController {
  
  buscar(req, res) {
    const listaUserdata = brechoUserdataModel.listar();
    return listaUserdata
      .then((Userdata) => res.status(200).json(Userdata))
      .catch((error) => res.status(400).json(error.message));
  }

  criar(req, res) {
    const novoUserdata = req.body;
    const Userdata = brechoUserdataModel.criar(novoUserdata);
    return Userdata
      .then((UserdataCriado) => res.status(201).json(UserdataCriado))
      .catch((error) => res.status(400).json(error.message));
  }
  atualizar(req, res) {
    const { email } = req.params;
    const UserdataAtualizado = req.body;
    const Userdata = brechoUserdataModel.atualizar(UserdataAtualizado);
    return Userdata
      .then((resultUserdataAtualizado) =>
        res.status(200).json(resultUserdataAtualizado))
      .catch((error) => res.status(400).json(error.message));
  }
  deletar(req, res) {
    const { email } = req.params;
    const Userdata = brechoUserdataModel.delete(email);
    return Userdata
      .then((resultUserdataDeletado) =>
        res.status(200).json(resultUserdataDeletado)
      )
      .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new BrechoUserdataController();



































