// var lista_fruta = []

// lista_fruta[1] = 'Banana'
// lista_fruta[2] = 'Maçã'
// lista_fruta['x'] = 'Morango'
// lista_fruta[4] = 'Uva'

// var lista_fruta = Array('Banana', 'Maçã', 'Uva')

// console.log(lista_fruta[2])

/*  Array multidimensional
 */
/*
var lista_coisas = Array()

lista_coisas['frutas'] = Array('Banana', 'Maçã', 'Morango')

lista_coisas['pessoas'] = Array()

lista_coisas['pessoas']['a'] = 'Pedro'
lista_coisas['pessoas']['b'] = 'João'
lista_coisas['pessoas']['c'] = 'Paulo'

document.write(lista_coisas['pessoas']['a'])

 lista_coisas['pessoas'][1] = 'Pedro'
lista_coisas['pessoas'][2] = 'João'
lista_coisas['pessoas'][3] = 'Paulo' */

/* 
lista_coisas['frutas'] = Array()

lista_coisas['frutas'][1] = 'Banana'
lista_coisas['frutas'][2] = 'Maçã'
lista_coisas['frutas'][3] = 'Morango' 

console.log(lista_coisas)*/

/* Métodos de inclusão e exclusão de elementos
 */
/* 
var lista_frutas = Array()

lista_frutas['frutas'] =  Array()
lista_frutas['pessoas'] = []

lista_frutas['frutas'].push('Banana')
lista_frutas['frutas'].push('Uva')

//Incluir elemento no final do array
// lista_frutas.push('Uva')

//Incluir elemento no começo do array
// lista_frutas.unshift('Morango')

//Excluir no final do array 
// lista_frutas.pop()

//Excluir no começo do array
// lista_frutas.shift()

console.log(lista_frutas) */


/* Pesquisar elementos dentro do Arry
*/

/* var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

var comp = lista_frutas.indexOf('Banana')

if(comp == -1){
    console.log('Elemento não existe')
} else {
    console.log('Elemento existe na posição ' + comp)
} */

/* Ordenação de elementos
*/

var lista_frutas = Array()

lista_frutas[0] = 'Maçã'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Morango'

console.log(lista_frutas.sort())


var lista_numeros = Array()

lista_numeros[0] = 12
lista_numeros[1] = 40
lista_numeros[2] = 3
lista_numeros[3] = 7
lista_numeros[4] = 19
lista_numeros[5] = 1

console.log(lista_numeros.sort(ordenaNumeros))

function ordenaNumeros(a, b){
    return a - b
    // < 0 = a ordena antes de b
    // > 0 = b ordenado antes de a
    // == a ordem é mantida
}