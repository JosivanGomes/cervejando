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
//HABILITANITANDO REQ.BODY
server.use(express.urlencoded({extended : true}))

const db = require("./db")

//CONSULTANDO
//CRIANDO ROTA (/)
//PEGANDO O PEDIDO DO CLIENTE
server.get("/", function(req, res) {
    
    db.all(`SELECT * FROM ideias`, function(err, rows){
        if (err){
            console.log(err)
            return res.send("Erro - Banco de dados")
        }else{
            var reverso_ideias = [...rows].reverse()
            ultimas_ideias = []
            for (ideia of reverso_ideias){
                if(ultimas_ideias.length < 2){
                    ultimas_ideias.push(ideia)
                }
            }
            return res.render("index.html", { ideias : ultimas_ideias })
        }
        
    })

    
})

/*
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
*/


server.get("/ideias", function(req, res){

    db.all(`SELECT * FROM ideias`, function(err, rows){
        if (err){
            console.log(err)
            return res.send("Erro - Banco de dados")
        }else{
            var reverso_ideias = [...rows].reverse()
            return res.render("ideias.html", {ideias : reverso_ideias})
        }
    })
})

server.post("/", function(req, res){
    const idFromIdeias = req.body.del
    //DELETANDO
    db.run(`DELETE FROM ideias WHERE id = ?`, [idFromIdeias], function(err){
        if (err){
            console.log(err)
            return res.send("Erro - Banco de dados")
        }else{
            console.log("DELETADO: ", this)
            return res.redirect("/ideias")
        }
        
    })
})

server.post("/", function(req, res){
    //INSERINDO DADOS
    const query = `
    INSERT INTO ideias (
        imagem,
        titulo,
        categoria,
        descricao,
        link
    ) VALUES (?, ?, ?, ?, ?);
    ` 

    const valores = [
        req.body.imagem,
        req.body.titulo,
        req.body.categoria,
        req.body.descricao,
        req.body.link
    ]

    db.run(query, valores, function(err){
        if (err){
            console.log(err)
            return res.send("Erro - Banco de dados")
        }else{
            return res.redirect("/ideias")
        }
    })
})


//LIGANDO SERVIDOR LOCAL
server.listen(3000)