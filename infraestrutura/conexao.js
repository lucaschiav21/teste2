const mysql = require("mysql2");
const config = require("config");
const fs = require("fs");


const conexao = mysql.createConnection({
  host: config.get("conexao.host"),
  port: config.get("conexao.port"),
  user: config.get("conexao.user"),
  password: config.get("conexao.password"),
  database: config.get("conexao.database"),
});

module.exports = conexao;


