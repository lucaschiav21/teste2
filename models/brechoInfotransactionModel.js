const conexao = require("../infraestrutura/conexao");
class brechoInfotransactionModel {
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
    const sql = "SELECT * FROM Infotransaction";
    return this.executaQuery(sql);
  }

  criar(novaInfotransaction) {
    const sql = "INSERT INTO Infotransaction SET ?";
    return this.executaQuery(sql, novaInfotransaction);
  }

  atualizar(InfotransactionAtualizada, numberTransaction) {
    const sql = "UPDATE Infotransaction SET ? WHERE numberTransaction = ?";
    return this.executaQuery(sql, [InfotransactionAtualizada, numberTransaction]);
  }

  delete(numberTransaction) {
    const sql = "DELETE FROM Infotransaction WHERE numberTransaction = ?";
    return this.executaQuery(sql, numberTransaction);
  }
}

module.exports = new brechoInfotransactionModel();        