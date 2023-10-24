const brechoUserpermission = require("../models/brechoUserpermission");
class UserpermissionController {
  
   criar(req, res){
    const novoUserpermission = req.body;
    const Userpermission = brechoUserpermission.criar(novoUserpermission);
    return Userpermission
      .then((UserpermissionCriado) => res.status(201).json(UserpermissionCriado))
      .catch((error) => res.status(400).json(error.message));
  }
  atualizar(req, res) {
    const { email } = req.params;
    const UserpermissionAtualizado = req.body;
    const Userpermission = brechoUserpermission.atualizar(UserpermissionAtualizado);
    return Userpermission
      .then((resultUserpermissionAtualizado) =>
        res.status(200).json(resultUserpermissionAtualizado))
      .catch((error) => res.status(400).json(error.message));
  }
  deletar(req, res) {
    const { email } = req.params;
    const Userpermission = brechoUserpermission.delete(email);
    return Userpermission
      .then((resultUserpermissionDeletado) =>
        res.status(200).json(resultUserpermissionDeletado)
      )
      .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new UserpermissionController();

