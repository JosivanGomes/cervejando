document //Apontar para documento 
    .querySelector("#fat") //Escolher seletor pelo nome
    .addEventListener("click",function(){ //adicionar evento
        document
            .querySelector("#footer")
            .classList //criar o parametro lista
            .toggle("hide") //tirar e colocar o valor da casse - escolhendo o nome
    })