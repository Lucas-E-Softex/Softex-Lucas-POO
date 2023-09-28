interface IObserver{
    id:number;
    message:string;
    recieveNotification:(message:string)=>void;
}

abstract class AbstractObserver implements IObserver{
    id:number = 0;
    message:string;
    public constructor(){
        this.id=0;
        this.message = '';
    }
    public recieveNotification(message:string):void{
        this.message = message;
        console.log(`observer n ${this.id} got notified`)
    }
    public addId(newId:number):void{
        this.id = newId;
    }
    public getRecievedMessage():string{
        return this.message;
    }
}

interface IObservable{
    observers:Array<AbstractObserver>;
    observersQuantity:number;
}

abstract class AbstractObservable implements IObservable{
    observers:Array<AbstractObserver> = [];
    observersQuantity:number = 0;

    public addObservable(observer:AbstractObserver):void{
        this.observersQuantity += 1;
        observer.addId(this.observersQuantity - 1);
        this.observers.push(observer);
    }
    public notifyObserver(message:string):void{
        this.observers.map((observer) => {
            observer.recieveNotification(message);
        })
    }
}

class Button extends AbstractObservable{
    private name:string;

    public constructor(name:string){
        super();
        this.name=name;
    }

    public click():void{
        this.notifyObserver("AAAAAAAI PAI PARA");
    }
}

class ButtonObserver extends AbstractObserver{
    public expressClickMessage():void{
        console.log(this.message);
    }
}

const firstObserver:ButtonObserver = new ButtonObserver()
const secondObserver:ButtonObserver = new ButtonObserver()
const thirdObserver:ButtonObserver = new ButtonObserver()
const fourthObserver:ButtonObserver = new ButtonObserver()

const button:Button = new Button('First Button');
button.addObservable(firstObserver)
button.addObservable(secondObserver)
button.addObservable(thirdObserver)
button.addObservable(fourthObserver)

button.click()
button.click()
button.click()


