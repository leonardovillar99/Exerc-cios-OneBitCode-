const nome = prompt('Informe o nome do recruta: ')
const sobrenome = prompt('Informe o sobrenome do recruta: ')
const campoEstudo = prompt('Informe o campo de estudo do recruta: ')
const anoNascimento = parseInt(prompt('Informe a data de nascimento do recruta: '))

alert('Recruta cadastrado com sucesso!' +
    '\nO nome do recruta é: ' + nome + ' ' + sobrenome + 
    '\nCampo de estudo: ' + campoEstudo + 
    '\nIdade: ' + (2023 - anoNascimento) + ' anos');

let nome2 = 'Leonardo';
console.log(`Seu nome é: ${nome}`)