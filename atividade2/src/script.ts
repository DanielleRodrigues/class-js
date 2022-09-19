import PromptSync = require('prompt-sync');
import { Aviao } from "./aviao";
const prompt = PromptSync();

const capacidade = Number(prompt('Digite a capacidade: '));
const anoLancamento = Number(prompt('Digite o ano de lançamento: '));
const modelo = prompt('Digite o modelo : ');

const aviao = new Aviao({
    capacidade,
    anoLancamento,
    modelo,
});

console.log(`O aviao ${modelo} que foi lançando ${anoLancamento} tem ${capacidade} passageiros`);
aviao.voar(capacidade);
