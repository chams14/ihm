
class Observable {

  constructor(){
    this.observers = [];
    console.log('observable');
    this.state = false;
  }

  addObservers(observer){
    this.observers.push(observer);
  }

  notifyObservers(object = null){

    if(this.state){
      for(let i = 0; i < this.observers.length; i++) {
        this.observers[i].update(this, object);
        console.log('notifyObservers i:', i, 'length:', this.observers.length);
      }
    }

    this.state = false;
  }

  clearObservers(){
    this.observers = [];
  }

  setChanged(){
    this.state = true;
  }

  removeObserver(observer){
    for(let i = 0; i < this.observers.length; i++) {
      if(this.observers[i] === observer){
        this.observers.splice(i, 1);
      }
    }
  }
}

class Observer {
  constructor(){

  }

  update(observable, object){

  }
}