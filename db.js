const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./cervejando.db')

db.serialize(function() {

    //CRIANDO TABELA

    db.run(`
        CREATE TABLE IF NOT EXISTS ideias(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            imagem TEXT,
            titulo TEXT,
            categoria TEXT,
            descricao TEXT,
            link TEXT
        );
    `)

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
        "https://image.flaticon.com/icons/svg/2836/2836485.svg",
        "Weiss de Pobre",
        "Receita Cervejeira",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, fuga. Distinctio alias atque, quis in fuga eaque expedita possimus ipsum omnis  quibusdam amet dolor labore facilis odit est illum dolorum?",
        "https://youtube.com"
    ]

    db.run(query, valores, function(err){
        if (err) return console.log(err)

        console.log(this)
    })

    //CONSULTANDO

    //DELETANDO
})