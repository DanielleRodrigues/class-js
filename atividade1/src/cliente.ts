/*ATIVIDADE 1
Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto cliente, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/


interface newCliente {

    sexo: string;
    idade: number;
    nome: string;
}

class Cliente {

    private nome: string;
    private sexo: string;
    private idade: number;

    constructor({ nome, sexo, idade }: newCliente) {
        this.sexo = sexo;
        this.idade = idade;
        this.nome = nome;
    }


    public comprar(nome: string) {

        this.nome = nome;
        console.log('Você comprou X item');
    }

}
export { Cliente };