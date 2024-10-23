

// implementation class

class Model extends Observable {

    constructor() {
        super();
        console.log('test');
        this.counter = 0;
    }

    incrementer() {
        this.counter++;
        this.setChanged();
        this.notifyObservers();
    }

    decrementer() {
        if(this.counter>0){
            this.counter--;
            this.setChanged()
            this.notifyObservers();
        }
    }
}
