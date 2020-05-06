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
/*
    //DELETANDO
    db.run(`DELETE FROM ideias WHERE id = ?`, [1], function(err){
        if (err) return console.log(err)

        console.log("DELETADO: ", this)
    })

*/
    
})


module.exports = db