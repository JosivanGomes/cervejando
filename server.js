//USANDO O EXPRESS PARA CRIAR E CONFIGURAR SERVIDOR
const express = require("express")
const server = express()

//CONFIGURANDO ARQUIVOS ESTATICOS
server.use(express.static("public"))


//CRIANDO ROTA (/)
//PEGANDO O PEDIDO DO CLIENTE
server.get("/", function(req, res) {
    return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias", function(req, res){
    return res.sendFile(__dirname + "/ideias.html")
})

//LIGANDO SERVIDOR LOCAL
server.listen(3000)