// implementation class

class Model extends Observable {

    static title = "";
    static sport = "";

    constructor(){
        super();
        
        this.title = "Call of Ball";
    	this.sport = "Basketball";
    }
	
    setValue() {
	this.setChanged();
        this.notifyObservers();
    }
}
