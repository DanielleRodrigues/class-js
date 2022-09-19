/*ATIVIDADE 2
Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto avião, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/

interface newAviao {

    modelo: string;
    anoLancamento: number;
    capacidade: number;

}

class Aviao {

    private modelo: string;
    private anoLancamento: number;
    private capacidade: number;



    constructor({ modelo, anoLancamento, capacidade }: newAviao) {
        this.modelo = modelo;
        this.anoLancamento = anoLancamento;
        this.capacidade = capacidade;
    }
    public voar(capacidade: number) {
        this.capacidade = capacidade;
        console.log(`O avião está voando e tem capacidade ${capacidade}`);
    }
}
export { Aviao };