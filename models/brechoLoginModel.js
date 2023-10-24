
const conexao = require("../infraestrutura/conexao");
class brechoLoginModel {
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
    const sql = "SELECT * FROM logins";
    return this.executaQuery(sql);
  }

  criar(novoLogin) {
    const sql = "INSERT INTO logins SET ?";
    return this.executaQuery(sql, novoLogin);
  }

  atualizar(LoginAtualizado, email) {
    const sql = "UPDATE logins SET ? WHERE email = ?";
    return this.executaQuery(sql, [LoginAtualizado, email]);
  }

  delete(email) {
    const sql = "DELETE FROM logins WHERE email = ?";
    return this.executaQuery(sql, email, password);
  }
}

module.exports = new brechoLoginModel();