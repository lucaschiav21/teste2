const brechoTransacoesModel = require("../models/brechoTransacoesModel");
class BrechoTransacoesController {
  buscar(req, res) {
    const listaTransacoes = brechoTransacoesModel.listar();
    return listaTransacoes
      .then((transacoes) => res.status(200).json(transacoes))
      .catch((error) => res.status(400).json(error.message));
  }
  criar(req, res) {
    const novaTransacao = req.body;
    const Transacao = brechoTransacoesModel.criar(novaTransacao);
    return Transacao
      .then((TransacaoCriada) => res.status(201).json(TransacaoCriada))
      .catch((error) => res.status(400).json(error.message));
  }
  atualizar(req, res) {
    const { email } = req.params;
    const TransacaoAtualizada = req.body;
    const Transacao = brechoTransacoesModel.atualizar(TransacaoAtualizada);
    return Transacao
      .then((resultTransacaoAtualizada) =>
        res.status(200).json(resultTransacaoAtualizada)
      )
      .catch((error) => res.status(400).json(error.message));
  }
  deletar(req, res) {
    const { email } = req.params;
    const Transacao = brechoTransacoesModel.delete(email);
    return Transacao
      .then((resultTransacaoDeletada) =>
        res.status(200).json(resultTransacaoDeletada)
      )
      .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new BrechoTransacoesController();
