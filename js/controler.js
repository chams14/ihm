class UpdateTitle extends Observer {
  
    constructor(view){
      super();
      this.view = view;
    }
  
    update(observable, object){
    	this.view.title.innerHTML = observable.title;
    } 
}

class UpdateSport extends Observer {
  
    constructor(view){
      super();
      this.view = view;
    }
  
    update(observable, object){
    	this.view.sport.innerHTML = observable.sport;
    } 
}

class UpdateDate extends Observer {
  
    constructor(view){
      super();
      this.view = view;
    }
  
    update(observable, object){
    	this.view.date.innerHTML = observable.date;
    } 
}

class UpdateTime extends Observer {
  
    constructor(view){
      super();
      this.view = view;
    }
  
    update(observable, object){
    	this.view.time.innerHTML = observable.time;
    } 
}

class Controler {

  constructor(model){

      this.view = new View();
      this.model = model;

      // update
	  
      let updateTitle = new UpdateTitle(this.view);
      this.model.addObservers(updateTitle);
	  
      let updateSport = new UpdateSport(this.view);
      this.model.addObservers(updateSport);
      
      let updateDate = new UpdateDate(this.view);
      this.model.addObservers(updateDate);
	  
      let updateTime = new UpdateTime(this.view);
      this.model.addObservers(updateTime);
      
      //action
	  
      let actionAdd = (event) => {
      	this.model.setValue();
      }
	  
      this.view.buttonAddSeance.addEventListener('click', actionAdd);
      
      //nécessaire à cet endrit pour que Call of Ball et Basketball soient affichés à l'initialisation de la page
      //après que les observers aient été instanciés
      actionAdd();
  }
}
