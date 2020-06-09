var objetos = Array('Cadeira', 'Impressora', 'Garfo')

function addObjeto(){
    //Recuperar o valor contido no campo de texto.
    var objetoVerifica = document.getElementById('campo-text').value

    if(objetoVerifica != ""){
        if(objetos.indexOf(objetoVerifica) != -1){
            //Se existir, exibir alert com a mensagem "Objeto já foi adicionado".
            alert('Objeto já foi adicionado') 
        } else {

            objetos.push(objetoVerifica)
            console.log(objetos)

            document.getElementById('campo-text').value = ""
        }
    } else {
        //Se existir, exibir alert com a mensagem "Objeto já foi adicionado".
        alert('Informe um valor válido')
    }
}

function addOdernacao(){
    objetos.sort()
    console.log(objetos)
}