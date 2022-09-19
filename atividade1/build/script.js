"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Cliente_1 = require("./Cliente");
var prompt = PromptSync();
var idade = Number(prompt('Digite a idade: '));
var nome = prompt('Digite o nome : ');
var sexo = prompt('Digite o sexo : ');
var cliente = new Cliente_1.Cliente({
    sexo: sexo,
    nome: nome,
    idade: idade,
});
cliente.comprar(nome);
console.log("O funcio\u00E1rio ".concat(nome, " que \u00E9 do sexo  ").concat(sexo, " tem ").concat(idade, " anos"));
