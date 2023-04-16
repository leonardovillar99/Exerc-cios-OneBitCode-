// Array que irá carregar a lista de cidades visitadas
let cidadesVisitadas = [];

// Variável que carrega o nome do turista
let turista = prompt('Digite o nome do turista: ');

// Variável que carrega as opções de continuar ou não digitando o nome das cidades visitadas
let visitouCidade = prompt(`${turista}, você já visitou alguma cidade? \n1- Sim \n2- Não`);

while(visitouCidade == 1){
    nomeCidade = prompt(turista + ', digite o nome da cidade que você visitou: ');
    cidadesVisitadas.push(nomeCidade);

    visitouCidade = prompt(`${turista}, você visitou mais alguma cidade? \n1- Sim \n2- Não`);

    //Variável responsável por guardar o número de cidades visitadas
    let contadorCidades = cidadesVisitadas.length;

    if(visitouCidade == 2){
        alert(`${turista}, você visitou ${contadorCidades} cidades, são elas: \n${cidadesVisitadas.join(', ')}.`)
        break;
    }
}

if (cidadesVisitadas.length == 0) {
    alert(`${turista}, você não visitou nenhuma cidade.`);
}
