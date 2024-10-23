class UpdateTxt extends Observer {
    constructor(view){
      super();
      this.view = view;
    }
    update(observable, object){
      this.view.input.value = observable.x;
      this.view.list.value = observable.x;
      console.log("Valeur du modèle :", observable.x);
    } 
}

class UpdateDisable extends Observer {
    constructor(view){
      super();
      this.view = view;
    }
  
    update(observable, object){
      this.view.buttonPlus.disabled = observable.x == Model.MAX;
      this.view.buttonMinus.disabled = observable.x == Model.MIN;
    } 
}

class Controler {
  constructor(model){
    this.view = new View();
    this.model = model;

    // update
    let updateTxt  = new UpdateTxt(this.view);
    this.model.addObservers(updateTxt);

    let updadeDisable = new UpdateDisable(this.view);
    this.model.addObservers(updadeDisable);

    //  action
    let actionPlus = (event) => {
      this.model.plus();
    }
    let actionMinus = (event) => {
      this.model.minus();
    }

    let actionInput = (event) => {
      const newX = parseInt(event.target.value);
      this.model.setValue(newX);
    }

    this.view.buttonPlus.addEventListener('click', actionPlus);
    this.view.buttonMinus.addEventListener('click', actionMinus);
    this.view.input.addEventListener('change', actionInput);
    this.view.list.addEventListener('change', actionInput);

    // permet de lancer une fois les observer pour initialiser la vue
    this.model.setValue(0);
  }
}
