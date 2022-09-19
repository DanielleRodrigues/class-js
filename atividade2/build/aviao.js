"use strict";
/*ATIVIDADE 2
Crie uma classe avião e apresente os atributos e métodos referentes a esta classe,
em seguida crie um objeto avião, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aviao = void 0;
var Aviao = /** @class */ (function () {
    function Aviao(_a) {
        var modelo = _a.modelo, anoLancamento = _a.anoLancamento, capacidade = _a.capacidade;
        this.modelo = modelo;
        this.anoLancamento = anoLancamento;
        this.capacidade = capacidade;
    }
    Aviao.prototype.voar = function (capacidade) {
        this.capacidade = capacidade;
        console.log("O avi\u00E3o est\u00E1 voando e tem capacidade ".concat(capacidade));
    };
    return Aviao;
}());
exports.Aviao = Aviao;
