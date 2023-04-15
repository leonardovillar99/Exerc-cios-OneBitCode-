const nomeVeiculo1 = prompt('Informe o nome do primeiro veículo: ');
const velocidade1 = parseFloat(prompt('Informe a velocidade do primeiro veículo: '));

const nomeVeiculo2 = prompt('Informe o nome do segundo veículo: ');
const velocidade2 = parseFloat(prompt('Informe a velocidade do segundo veículo: '));


if(velocidade1 > velocidade2){
    alert(`O veículo ${nomeVeiculo1} está na velocidade de ${velocidade1} km/h e é mais rápido que o ${nomeVeiculo2}`)
} else if(velocidade2 > velocidade1){
    alert(`O veículo ${nomeVeiculo2} está na velocidade de ${velocidade2} km/h e é mais rápido que o ${nomeVeiculo1}`) 
}