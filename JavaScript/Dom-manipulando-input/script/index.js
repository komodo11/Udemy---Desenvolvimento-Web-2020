function distribuiCaracter(){
    //Selecionar o valor digitado
    
    var caracter = document.getElementById('entrada').value

    //Limpar o campo de digitação
    document.getElementById('entrada').value = ""
    
    // console.log(caracter)

    //Limpar espaços em branco nas extremidades
    caracter.trim()


    switch(caracter){
        case '0':
            
        case '1':

        case '2':

        case '3':

        case '4':

        case '5':

        case '6':

        case '7':

        case '8':

        case '9':
            //Adicionar caracter no campo referente a numeros
            document.getElementById('apenas_numeros').value += caracter
            break;
        default:
            //Adiciona o caracter no campo referente a letras
            document.getElementById('apenas_letras').value += caracter
    }
}