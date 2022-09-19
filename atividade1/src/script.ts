import PromptSync = require('prompt-sync');
import { Cliente } from "./Cliente";
const prompt = PromptSync();


const idade = Number(prompt('Digite a idade: '));
const nome = prompt('Digite o nome : ');
const sexo = prompt('Digite o sexo : ');

const cliente = new Cliente({
    sexo,
    nome,
    idade,
});

cliente.comprar(nome);
console.log(`O funcioário ${nome} que é do sexo  ${sexo} tem ${idade} anos`);






