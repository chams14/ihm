// implementation class

class Model extends Observable {

    static title = "";
    static sport = "";

    constructor(){
        super();
        
        this.title = "Call of Ball";
    	this.sport = "Basketball";
    }
	
    setTitleAndSport() {
	this.setChanged();
        this.notifyObservers();
    }
    
    addTextField() {
    	const newTextField = document.createElement('input');
    
    	newTextField.type = '';

    	document.getElementById('textFieldContainer').appendChild(newTextField);
    	
    	this.setChanged();
        this.notifyObservers();
    }
}
