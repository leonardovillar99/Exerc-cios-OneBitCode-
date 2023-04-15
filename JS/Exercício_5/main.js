let medida = parseFloat(prompt('Digite um valor em metros: '))

let conversor = parseInt(prompt('Deseja converter o valor de ' + medida + 
                ' para qual medida? \n1- Milímetros(mm) \n2- Centímetros(cm) \n3- Decímetro(dc) \n4- Decâmetro(dam) \n5- Hectômetro(hm) \n6- Quilômetro(km) '))

switch(conversor){
    case 1:
        medida = (medida * 1000)
        alert('Medida convertida: ' + medida + ' milímetro(s)');
    break;

    case 2:
        medida = (medida * 100)
        alert('Medida convertida: ' + medida + ' centímetro(s)');
    break;

    case 3:
        medida = (medida * 10)
        alert('Medida convertida: ' + medida + ' decímetro(s)');
    break;

    case 4:
        medida = (medida * 0.1)
        alert('Medida convertida: ' + medida + ' decâmetro(s)');
    break;

    case 5:
        medida = (medida * 0.01)
        alert('Medida convertida: ' + medida + ' hectômetro(s)');
    break;

    case 6:
        medida = (medida * 0.001)
        alert('Medida convertida: ' + medida + ' quilômetro(s)');
    break;

    default:
        alert('Opção Inválida')
    break;
}

