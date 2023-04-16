let nome = prompt('Digite seu nome: ');
let qtdInicial = parseFloat(prompt(nome + ', digite a quantidade inicial de dinheiro disponível em conta: '));

let opcoes = prompt(nome + ', você tem disponível em conta o valor de: R$' + qtdInicial + 
            '\n\nEscolha uma das operações que deseja realizar abaixo: \n1- Depositar \n2- Sacar \n3- Ver Extrato e Sair');


while(opcoes == 1){
    let qtdAdicionar = parseFloat(prompt(`${nome}, quantos reais você deseja depositar ao valor atual da conta?`));
    qtdInicial += qtdAdicionar;
    opcoes = prompt(nome + ', agora você tem disponível em conta o valor de: R$' + qtdInicial + 
            '\n\nEscolha uma das operações que deseja realizar abaixo: \n1- Depositar \n2- Sacar \n3- Ver Extrato e Sair');
    }

while(opcoes == 2){
    let qtdRemover = parseFloat(prompt(`${nome}, quantos reais você deseja sacar do valor atual da conta?`));
    qtdInicial -= qtdRemover;
    opcoes = prompt(nome + ', agora você tem disponível em conta o valor de: R$' + qtdInicial + 
            '\n\nEscolha uma das operações que deseja realizar abaixo: \n1- Depositar \n2- Sacar \n3- Ver Extrato e Sair');
}

if(opcoes == 3){
    alert(`${nome}, sua conta possui: R$${qtdInicial} \nSessão Finalizada!`)
}