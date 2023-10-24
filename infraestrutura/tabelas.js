class Tabelas {
    init(conexao) {
      this.conexao = conexao;
      this.criarTabelaLogins(); 
      this.criarTabelaTransacoes(); 
      this.criarTabelaUserdata(); 
      this.criarTabelaUserpermission(); 
      this.criarTabelaInfotransaction();
    }
  
    criarTabelaLogins() {
      const sql =  `
          CREATE TABLE IF NOT EXISTS logins (
          email CHAR(100) NOT NULL PRIMARY KEY,
          userId INT(80) NOT NULL AUTO_INCREMENT,
          userPassword CHAR(200), 
          userPassBlock CHAR(1),
          userCreatedIn CHAR(14), 
          userLastAccess CHAR(14)
      );
     
        `; 
      this.conexao.query(sql, (error) => {
        if (error) {
          console.log("Eita deu erro na hora de criar a tabela logins");
          console.log(error.message);
          return;
        }
        console.log("Show criou a tabela com sucesso...");
      });
    } 

    criarTabelaTransacoes() {
        const sql = `
            CREATE TABLE IF NOT EXISTS transacoes (
            email CHAR(100) NOT NULL PRIMARY KEY,
            numberTransaction INT(80) NOT NULL AUTO_INCREMENT, 
            publishDate CHAR(14),
            productActive CHAR(1)
        );
          `; 
        this.conexao.query(sql, (error) => {
          if (error) {
            console.log("Eita deu erro na hora de criar a tabela transacoes");
            console.log(error.message);
            return;
          }
          console.log("Show criou a tabela com sucesso...");
        });
      } 

      criarTabelaUserdata() {
        const sql = `
            CREATE TABLE IF NOT EXISTS userdata (
            email VARCHAR(100) NOT NULL PRIMARY KEY,
            userId INT(80) NOT NULL AUTO_INCREMENT, 
            userName CHAR(200), 
            userPhone CHAR(11),
            userPostalCode CHAR(9)
        );
          `; 
        this.conexao.query(sql, (error) => {
          if (error) {
            console.log("Eita deu erro na hora de criar a tabela dados de usuario .");
            console.log(error.message);
            return;
          }
          console.log("Show criou a tabela com sucesso...");
        });
      } 

      criarTabelaUserpermission() {
        const sql = `
            CREATE TABLE IF NOT EXISTS userpermission (
            email VARCHAR(100) NOT NULL PRIMARY KEY,
            userId INT(80) NOT NULL AUTO_INCREMENT, 
            userType CHAR(1), 
            userPermission CHAR(1)
        );
          `; 
        this.conexao.query(sql, (error) => {
          if (error) {
            console.log("Eita deu erro na hora de criar a tabela de permissao de usuario .");
            console.log(error.message);
            return;
          }
          console.log("Show criou a tabela com sucesso...");
        }); 
      } 

      criarTabelaInfotransaction() {
        const sql = `
            CREATE TABLE IF NOT EXISTS infotransaction (
            numberTransaction INT(80) NOT NULL PRIMARY KEY,
            productDescription CHAR(255) NOT NULL, 
            productQuantity DEC,
            productImage BIN, 
            productImageDiscription CHAR (255)
        );
          `; 
        this.conexao.query(sql, (error) => {
          if (error) {
            console.log("Eita deu erro na hora de criar a tabela informacao de transacao .");
            console.log(error.message);
            return;
          }
          console.log("Show criou a tabela com sucesso...");
        }); 
      }
  }

  module.exports = new Tabelas();