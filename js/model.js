

// implementation class

class Model extends Observable {

    static title = "";
    static sport = "";

    constructor(){
        super();
        //this.x = 0;
    }
	
	setValue() {
		this.title = "Call of Ball";
		this.sport = "Basketball";
		
		this.setChanged();
        	this.notifyObservers();
	}

    /*setValue(x){

        if(x <= Model.MAX && x >= Model.MIN){
            this.x = x;
            this.setChanged();
            this.notifyObservers();
        }
    }

    plus(){
        this.setValue(this.x + 1);
    }

    minus(){
        this.setValue(this.x - 1);
    }*/
}
