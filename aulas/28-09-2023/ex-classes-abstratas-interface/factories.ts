interface IFiguraGeometrica{
    numeroDeLados:number;
}

abstract class AbstractFiguraGeometrica implements IFiguraGeometrica{
    numeroDeLados: number;

    constructor(numeroDeLados:number){
        this.numeroDeLados = numeroDeLados;
    }

    public getLados():number{
        return this.numeroDeLados;
    }
}

class ConcreteSquare extends AbstractFiguraGeometrica{
    public constructor(numeroDeLados:number){
        super(numeroDeLados);
    }
}

class ConcreteCircle extends AbstractFiguraGeometrica{
    public constructor(numeroDeLados:number){
        super(numeroDeLados)
    }
}

class ConcreteTriangle extends AbstractFiguraGeometrica{

    public constructor(numeroDeLados:number){
        super(numeroDeLados)
    }
}


class ShapeFactory{
    public getSquare():ConcreteSquare{
        const square:ConcreteSquare = new ConcreteSquare(4);
        return square
    }
    public getCiculo():ConcreteCircle{
        const circle:ConcreteCircle = new ConcreteCircle(0);
        return circle;
    }
    public getTriangulo():ConcreteTriangle{
        const triangle:ConcreteTriangle = new ConcreteTriangle(3);
        return triangle;
    }
}

const factory:ShapeFactory = new ShapeFactory();

const triangulo:ConcreteTriangle = factory.getTriangulo()
console.log(triangulo.getLados());