const brechoInfotransaction = require("../models/brechoInfotransaction");
class InfotransactionController {
  buscar(req, res) {
    const listaInfotransaction = InfotransactionController.listar();
    return listaInfortransaction
      .then((Infotransaction) => res.status(200).json(Infotransaction))
      .catch((error) => res.status(400).json(error.message));
  }
  criar(req, res) {
    const novaInfotransaction = req.body;
    const Infotransaction = brechoInfotransaction.criar(novaInfotransaction);
    return Infotransaction
      .then((InfotransactionCriada) => res.status(201).json(InfotransactionCriada))
      .catch((error) => res.status(400).json(error.message));
  }
  atualizar(req, res) {
    const { numberTransaction } = req.params;
    const InfotransactionAtualizada = req.body;
    const Infotransaction = brechoInfotransaction.atualizar(InfotransactionAtualizada);
    return Infotransaction
      .then((resultInfotransactionAtualizada) =>
        res.status(200).json(resultInfotrsactionAtualizada)
      )
      .catch((error) => res.status(400).json(error.message));
  }
  deletar(req, res) {
    const { numberTransaction } = req.params;
    const Infotransaction = brechoInfotransaction.delete(id);
    return Infotransaction
      .then((resultInfotransactionDeletada) =>
        res.status(200).json(resultInfotransactionDeletada)
      )
      .catch((error) => res.status(400).json(error.message));
  }
}