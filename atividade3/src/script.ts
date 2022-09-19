import PromptSync = require('prompt-sync');
import { Eletronico } from "./eletronico";
const prompt = PromptSync();

const preco = Number(prompt('Digite o preco: '));
const categoria = (prompt('Digite a categoria: '));
const nome = prompt('Digite o nome : ');

const eletronico = new Eletronico({
    categoria,
    preco,
   nome,
});

console.log(`O eletronico ${nome} da ${categoria} está custando R$: ${preco} `);
eletronico.desligar(categoria);


