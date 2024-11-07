class UpdateTxt_Seance extends Observer {
  constructor(view){
    super();
    this.view = view;
  }
  update(observable, object){
    this.view.participation.innerText = observable.participation;
    this.view.jour.innerText = observable.dateS;
    this.view.heure.innerText = observable.horaires;
  } 
}

class Controler{
  constructor(model){
    
    this.model = model;
    this.view = new View();

    // update
    let updateTxt  = new UpdateTxt_Seance(this.view);
    this.model.addObservers(updateTxt);

    //  action 
    this.view.back.addEventListener('click', ()=>{window.history.back();});

    //participer
    let actionParticiper = (event) => {
      const currentAction = this.model.participation.includes('Ne') ? "desinscription" : "inscription";

      if(currentAction === "inscription"){
        this.model.setParticipation("desinscription", this.view.inscrit);
      } else {
        this.model.setParticipation("inscription", this.view.inscrit);
      }
    }
    this.view.participation.addEventListener('click', actionParticiper);

    // permet de lancer une fois les observer pour initialiser la vue
    this.model.setInscrit(this.view.inscrit);
    this.model.setDateSeance();
  }
}

