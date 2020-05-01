//USANDO O EXPRESS PARA CRIAR E CONFIGURAR SERVIDOR
const express = require("express")
const server = express()

//CONFIGURANDO O NUNJUCKS
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,  
})

//CONFIGURANDO ARQUIVOS ESTATICOS
server.use(express.static("public"))


const ideias = [
    {
        img: "https://image.flaticon.com/icons/svg/2836/2836485.svg",
        titulo: "Weiss de Pobre",
        categoria: "Receita Cervejeira",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, fuga. Distinctio alias atque, quis in fuga eaque expedita possimus ipsum omnis  quibusdam amet dolor labore facilis odit est illum dolorum?",
        link: "https://youtube.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2836/2836674.svg",
        titulo: "Hamburgão",
        categoria: "Acompanhamentos",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, fuga. Distinctio alias atque, quis in fuga eaque expedita possimus ipsum omnis  quibusdam amet dolor labore facilis odit est illum dolorum?",
        link: "https://youtube.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2836/2836485.svg",
        titulo: "Weiss de Pobre",
        categoria: "Receita Cervejeira",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, fuga. Distinctio alias atque, quis in fuga eaque expedita possimus ipsum omnis  quibusdam amet dolor labore facilis odit est illum dolorum?",
        link: "https://youtube.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/122/122921.svg",
        titulo: "Transformar Cooler em Geladeira",
        categoria: "Improviso",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, fuga. Distinctio alias atque, quis in fuga eaque expedita possimus ipsum omnis  quibusdam amet dolor labore facilis odit est illum dolorum?",
        link: "https://youtube.com"
    }]

var reverso_ideias = [...ideias].reverse()

//CRIANDO ROTA (/)
//PEGANDO O PEDIDO DO CLIENTE
server.get("/", function(req, res) {
    ultimas_ideias = []
    for (ideia of reverso_ideias){
        if(ultimas_ideias.length < 2){
            ultimas_ideias.push(ideia)
        }
    }
    return res.render("index.html", { ideias : ultimas_ideias })
})

server.get("/ideias", function(req, res){
    return res.render("ideias.html", {ideias : reverso_ideias})
})

//LIGANDO SERVIDOR LOCAL
server.listen(3000)