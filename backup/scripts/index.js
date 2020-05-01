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

/*document //Apontar para documento 
    .querySelector("#nv_ideia") //Escolher seletor pelo nome
    .addEventListener("click",function(){ //adicionar evento
        document
            .querySelector("#modal")
            .classList //criar o parametro lista
            .toggle("hide") //tirar e colocar o valor da casse - escolhendo o nome
    })*/