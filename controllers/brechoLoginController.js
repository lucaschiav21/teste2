const brechoLoginModel = require("../models/brechoLoginModel");
class BrechoLoginController {
  
  criar(req, res) {
    const novoLogin = req.body;
    const Login = brechoLoginModel.criar(novoLogin);
    return Login
      .then((LoginCriado) => res.status(201).json(LoginCriado))
      .catch((error) => res.status(400).json(error.message));
  }
  atualizar(req, res) {
    const { email } = req.params;
    const LoginAtualizado = req.body;
    const Login = brechoLoginModel.atualizar(LoginAtualizado, email);
    return Login
      .then((resultLoginAtualizado) =>
        res.status(200).json(resultLoginAtualizado))
      .catch((error) => res.status(400).json(error.message));
  }
  deletar(req, res) {
    const { email } = req.params;
    const Login = brechoLoginModel.delete(email);
    return Login
      .then((resultLoginDeletado) =>
        res.status(200).json(resultLoginDeletado)
      )
      .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new BrechoLoginController();
