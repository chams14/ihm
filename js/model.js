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
    	// création d'une nouvelle div pour contenir le champ texte
        const newDiv = document.createElement('div');
        // Espace entre les champs
        newDiv.style.marginBottom = '10px';
        
    	const newTextField = document.createElement('input');
    	newTextField.type = '';
    	
        newDiv.appendChild(newTextField);
        
        document.getElementById('textFieldContainer').appendChild(newDiv);
  
    }
}
