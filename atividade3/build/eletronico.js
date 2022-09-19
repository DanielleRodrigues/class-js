"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronico = void 0;
/*ATIVIDADE 3
Crie uma classe produto eletrônico e apresente os atributos e métodos referentes a esta classe,
em seguida crie um objeto produto eletrônico, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/ tr;
var Eletronico = /** @class */ (function () {
    function Eletronico(_a) {
        var preco = _a.preco, categoria = _a.categoria, nome = _a.nome;
        this.preco = preco;
        this.categoria = categoria;
        this.nome = nome;
    }
    Eletronico.prototype.desligar = function (categoria) {
        this.categoria = categoria;
        console.log("O eletronico ".concat(categoria, " est\u00E1 sendo desligado"));
    };
    return Eletronico;
}());
exports.Eletronico = Eletronico;
