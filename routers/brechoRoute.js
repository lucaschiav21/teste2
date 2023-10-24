const { Router } = require("express");
const router = Router();
const brechoLoginController = require("../controllers/brechoLoginController");
const brechoTransacoesController = require("../controllers/brechoTransacoesController"); 
const brechoUserdataController = require("../controllers/brechoUserdataController");
const Userpermission = require("../controllers/UserpermissionController"); 
const InfotransactionController = require("../controllers/InfotransactionController")

//get post put delete 

//Login

router.get("/logins", brechoLoginController.buscar);

router.post("/logins", brechoLoginController.criar);

router.put("/login/: email", brechoLoginController.atualizar);

router.delete("/login/: email", brechoLoginController.deletar);

// Transações - Troca ou Doação-

router.get("/transacoes", brechoTransacoesController.buscar);

router.post("/transacoes", brechoTransacoesController.criar);

router.put("/transacao/: email", brechoTransacoesController.atualizar);

router.delete("/transacao/: email", brechoTransacoesController.deletar); 

// User Data - Dados de Usuário 

router.get("/Userdata", brechoUserdataController.buscar);

router.post("/Userdata", brechoUserdataController.criar);

router.put("/Userdata/: email", brechoUserdataController.atualizar);

router.delete("/Userdata/: email", brechoUserdataController.deletar); 

// User Permission - Permissão de Usuário 

router.post("/Userpermission", Userpermission.criar);

router.put("/Userpermission/: email", Userpermission.atualizar);

router.delete("/Userpermission/: email", Userpermission.deletar);  

// Infotransaction - Informações da transação 

router.get("/Infotransaction", InfotransactionController.buscar);

router.post("/Infotransaction", InfotransactionController.criar);

router.put("/Infotransaction/: numberTransaction", InfotransactionController.atualizar);

router.delete("/Infotransaction/: numberTransaction", InfotransactionController.deletar); 


module.exports = router;
