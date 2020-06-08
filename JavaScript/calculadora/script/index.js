function calcular(tipo, valor){
    // console.log(tipo, valor)
    if(tipo == 'acao'){
        if( valor == 'c'){
            //Limpar o visor (id result)
            document.getElementById('result').value = ''
        }

    //Coloca o tipo de valor do sistema
    if( valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('result').value += valor

    }

    if(valor === '='){
        var valor_campo = eval(document.getElementById('result').value)
        // console.log(eval(valor_campo))
        document.getElementById('result').value = valor_campo
    }

    } else if(tipo === 'valor'){
        document.getElementById('result').value += valor
    }


}