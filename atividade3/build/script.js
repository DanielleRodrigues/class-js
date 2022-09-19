"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var eletronico_1 = require("./eletronico");
var prompt = PromptSync();
var preco = Number(prompt('Digite o preco: '));
var categoria = (prompt('Digite a categoria: '));
var nome = prompt('Digite o nome : ');
var eletronico = new eletronico_1.Eletronico({
    categoria: categoria,
    preco: preco,
    nome: nome,
});
console.log("O eletronico ".concat(nome, " da ").concat(categoria, " est\u00E1 custando R$: ").concat(preco, " "));
eletronico.desligar(categoria);
