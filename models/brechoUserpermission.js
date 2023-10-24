const conexao = require("../infraestrutura/conexao"); 
class brechoUserpermission {
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
    const sql = "SELECT * FROM userpermission";
    return this.executaQuery(sql);
  }

  criar(novoUserpermission) {
    const sql = "INSERT INTO userpermission SET ?";
    return this.executaQuery(sql, novoUserpermission);
  }

  atualizar(UserpermissionAtualizado, email) {
    const sql = "UPDATE userpermission SET ? WHERE email = ?";
    return this.executaQuery(sql, [UserpermissionAtualizado, email]);
  }

  delete(email) {
    const sql = "DELETE FROM userpermission WHERE email = ?";
    return this.executaQuery(sql, email,userType, userId, userPermission );
  }
}

module.exports = new brechoUserpermission();