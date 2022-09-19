"use strict";
/*ATIVIDADE 1
Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe,
em seguida crie um objeto cliente, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(_a) {
        var nome = _a.nome, sexo = _a.sexo, idade = _a.idade;
        this.sexo = sexo;
        this.idade = idade;
        this.nome = nome;
    }
    Cliente.prototype.comprar = function (nome) {
        this.nome = nome;
        console.log('Você comprou X item');
    };
    return Cliente;
}());
exports.Cliente = Cliente;
