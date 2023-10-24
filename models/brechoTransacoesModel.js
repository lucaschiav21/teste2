const conexao = require("../infraestrutura/conexao");
class brechoTransacoesModel {
  executaQuery(sql, parametros = "") {
    return new Promise((resolve, reject) => {
      conexao.query(sql, parametros, (error, resposta) => {
        if (error) {
          return reject(error);
        }
        return resolve(resposta);
      });
    });
  }
  listar() {
    const sql = "SELECT * FROM Transacoes";
    return this.executaQuery(sql);
  }

  criar(novaTransacao) {
    const sql = "INSERT INTO Transacoes SET ?";
    return this.executaQuery(sql, novaTransacao);
  }

  atualizar(TransacaoAtualizada, email) {
    const sql = "UPDATE Transacoes SET ? WHERE email = ?";
    return this.executaQuery(sql, [TransacaoAtualizada, email]);
  }

  delete(email) {
    const sql = "DELETE FROM Transacoes WHERE email = ?";
    return this.executaQuery(sql, email);
  }
}

module.exports = new brechoTransacoesModel();