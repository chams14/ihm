// implementation class
class Model extends Observable {
    static MAX = 10;
    static MIN = 0;

    constructor(){
        super();
        this.x = 0;
    }

    setValue(x){
        if(x <= Model.MAX && x >= Model.MIN){
            this.x = x;
        }
        this.setChanged();
        this.notifyObservers();
    }

    plus(){
        this.setValue(this.x + 1);
    }

    minus(){
        this.setValue(this.x - 1);
    }
}
