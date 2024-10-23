class UpdateTitle extends Observer {
  
    constructor(view){
      super();
      this.view = view;
    }
  
    update(observable, object){
      //this.view.input.value = observable.x;
	  //this.view.title.value = observable.title;
    	this.view.title.innerHTML = observable.title;
    } 
}

class UpdateSport extends Observer {
  
    constructor(view){
      super();
      this.view = view;
    }
  
    update(observable, object){
    	//this.view.sport.value = observable.sport;
    	this.view.sport.innerHTML = observable.sport;
    } 
}

/*class UpdateDisable extends Observer {
  
    constructor(view){
      super();
      this.view = view;
    }
  
    update(observable, object){
      this.view.buttonPlus.disabled = observable.x == Model.MAX;
      this.view.buttonMinus.disabled = observable.x == Model.MIN;
    } 
}*/

class Controler {

  constructor(model){

      this.view = new View();
      this.model = model;

      // update

      /*let updateTxt  = new UpdateTxt(this.view);
      this.model.addObservers(updateTxt);*/
	  
      let updateTitle = new UpdateTitle(this.view);
      this.model.addObservers(updateTitle);

      /*let updadeDisable = new UpdateDisable(this.view);
      this.model.addObservers(updadeDisable);*/
	  
      let updateSport = new UpdateSport(this.view);
      this.model.addObservers(updateSport);

      //  action
      /*let actionPlus = (event) => {
        this.model.plus();
      }

      let actionMinus = (event) => {
        this.model.minus();
      }

      this.view.buttonPlus.addEventListener('click', actionPlus);
      this.view.buttonMinus.addEventListener('click', actionMinus);*/
	  
      let actionAdd = (event) => {
      	this.model.setValue();
      }
	  
      this.view.buttonAddSeance.addEventListener('click', actionAdd);

      // permet de lancer une fois les observer pour initialiser la vue
      //this.model.setValue(0);

  }
}
