// Campeão que ataca
let champion1 = prompt('Informe o nome do campeão: ');
let damage = parseInt(prompt('Informe o poder de ataque do campeão: '));

//Campeão que defende
let champion2 = prompt('Informe o nome do segundo campeão: ');
let championLife = parseInt(prompt('Informe a quantidade de pontos de vida do segundo campeão: '));
let championDefence = parseInt(prompt('Informe o poder de defesa do segundo campeão: '));

// Informar se o campeão defensor possui escudo ou não
let championHasShield = parseInt(prompt('O campeão possui escudo? \n1- Sim \n2- Não'));

//Variável para cálculo da quantidade de dano sofrido
let championDamage

switch(championHasShield){
    case 1:
        championHasShield = true;
    break;

    case 2:
        championHasShield = false;
    break;
};

if(damage > championDefence && championHasShield == false){
    championLife = damage - championDefence;
}else if (damage > championDefence && championHasShield == true){
    championLife = (damage - championDefence) / 2;
}else if (damage <= championDefence){
    championLife = championLife;
}

championDamage = damage - championLife

alert(`Nome do campeão de ataque: ${champion1} \nDano: ${damage} \nNome do campeão de defesa: ${champion2} \nVida do campeão de defesa: ${championLife} \nQuantidade de defesa do campeão: ${championDefence} \nCampeão possui escudo: ${championHasShield} \nDano causado no campeão: ${championDamage}`)