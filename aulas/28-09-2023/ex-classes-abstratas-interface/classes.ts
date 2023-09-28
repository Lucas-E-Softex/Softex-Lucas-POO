class Animal{
    private nome:string;
    private idade:number;

    public constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}

class Periquito extends Animal{
    private raca:string;

    public constructor(raca:string, nome:string, idade:number){
        super(nome, idade);
        this.raca = raca;
    }
}

abstract class FiguraGeometrica{
    private nome:string;
    private area:number;

    public constructor(nome:string, area:number){
        this.nome = nome;
        this.area = area
    }
}

class Quadrado extends FiguraGeometrica{
    constructor(nome:string, area:number){
        super(nome, area);
    }
}

class Circulo extends FiguraGeometrica{
    constructor(nome:string, area:number){
        super(nome, area);
    }
}