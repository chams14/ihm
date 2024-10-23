class updateTxt extends Observer {

    constructor(view) {
        super();
        this.view = view;
    }
    update(observable, object){
        this.view.inputButton.value = observable.counter;
    }
}

class updateDisable extends Observer {
    constructor(view, model) {
        super();
        this.view = view;
        model.addObservers(this);
    }

    update(observable, object) {
        if (observable.counter == 0) {
            this.view.decrementButton.disabled = true;
        }else if(observable.counter == 10){
            this.view.incrementButton.disabled = true;
        }
        else {
            this.view.decrementButton.disabled = false;
            this.view.incrementButton.disabled = false;
        }
    }
}

class Controler {

  constructor(model){

      this.view = new View();
      this.model = model;

      // update
      this.model.addObservers(new updateTxt(this.view));
      this.model.addObservers(new updateDisable(this.view, this.model));

      // action
      this.view.incrementButton.addEventListener('click', ()=> this.increment());
      this.view.decrementButton.addEventListener('click', () => this.decremente());


  }

  increment(){
      this.model.incrementer();
  }

  decremente(){
      this.model.decrementer();
  }
}
