let option = parseInt(prompt('Escolha uma operação aritmética: \n1- Soma \n2- Subtração \n3- Multiplicação \n4- Divisão'))

if(option != 1 && option != 2 && option != 3 && option != 4){
    throw(alert('Erro, operação não existe!'))
}

let n1 = parseFloat(prompt('Digite o primeiro número: '));
let n2 = parseFloat(prompt('Digite o segundo número: '));

switch(option){

    case 1:
        soma = n1 + n2
        alert('Resultado da soma: ' + soma)
    break;

    case 2:
        subtracao = n1 - n2
        alert('Resultado da subtração: ' + subtracao)
    break;

    case 3:
        multiplicacao = n1 * n2
        alert('Resultado da multiplicação: ' + multiplicacao)
    break;

    case 4:
        divisao = n1 / n2
        alert('Resultado da divisão: ' + divisao)
    break;
}