const conexao = require("../infraestrutura/conexao"); 
class brechoUserdataModel {
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
    const sql = "SELECT * FROM userdata";
    return this.executaQuery(sql);
  }

  criar(novoUserdata) {
    const sql = "INSERT INTO userdata SET ?";
    return this.executaQuery(sql, novoUserdata);
  }

  atualizar(UserdataAtualizado, email) {
    const sql = "UPDATE userdata SET ? WHERE email = ?";
    return this.executaQuery(sql, [UserdataAtualizado, email]);
  }

  delete(email) {
    const sql = "DELETE FROM userdata WHERE email = ?";
    return this.executaQuery(sql, email,userName, userPhone, userPostalCode );
  }
}

module.exports = new brechoUserdataModel();