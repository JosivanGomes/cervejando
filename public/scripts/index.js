function liga_desliga(){
    document
        .querySelector("#modal")
        .classList //criar o parametro lista
        .toggle("hide") //tirar e colocar o valor da casse - escolhendo o nome

    document
        .querySelector('body')
        .classList
        .toggle('hideScroll')

    document
        .querySelector('#modal')
        .classList
        .toggle('addScroll')
}

function checkFields(event){
    const checarValor =[
        "titulo",
        "catgoria",
        "imagem",
        "descricao",
        "link"
    ]

    const checarVazio = checarValor.find(function(value){
        const verificaString = typeof event.target[value].value === 'string'
        const verificaVazio = !event.target[value].value.trim()

        if(verificaString && verificaVazio){
            return true
        }
    })

    if(checarVazio){
        event.preventDefault()
        alert("Preencha todos os campos")
    }
}

/*document //Apontar para documento 
    .querySelector("#nv_ideia") //Escolher seletor pelo nome
    .addEventListener("click",function(){ //adicionar evento
        document
            .querySelector("#modal")
            .classList //criar o parametro lista
            .toggle("hide") //tirar e colocar o valor da casse - escolhendo o nome
    })*/