let valor = parseFloat(prompt('Digite um valor para calcular a tabuada: '));
let resultado = '';

for(n = 1; n <= 20; n++){
    resultado += '\n - ' + valor + ' x ' + n + ' = ' + (valor * n);
}

alert('Resultado da Tabuada: ' + resultado)