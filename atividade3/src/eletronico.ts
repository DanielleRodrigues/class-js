/*ATIVIDADE 3
Crie uma classe produto eletrônico e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto produto eletrônico, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/tr


interface newEletronico {
    preco: number;
    categoria: string;
    nome: string;

}

class Eletronico {
    private categoria: string;
    private preco: number;
    private nome: string;


    constructor({ preco, categoria, nome }: newEletronico) {
        this.preco = preco;
        this.categoria = categoria;
        this.nome = nome;
    }
    public desligar(categoria: string) {
        this.categoria = categoria;
        console.log(`O eletronico ${categoria} está sendo desligado`);
    }

}
export {Eletronico};