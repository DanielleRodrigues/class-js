"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var aviao_1 = require("./aviao");
var prompt = PromptSync();
var capacidade = Number(prompt('Digite a capacidade: '));
var anoLancamento = Number(prompt('Digite o ano de lançamento: '));
var modelo = prompt('Digite o modelo : ');
var aviao = new aviao_1.Aviao({
    capacidade: capacidade,
    anoLancamento: anoLancamento,
    modelo: modelo,
});
console.log("O aviao ".concat(modelo, " que foi lan\u00E7ando ").concat(anoLancamento, " tem ").concat(capacidade, " passageiros"));
aviao.voar(capacidade);
