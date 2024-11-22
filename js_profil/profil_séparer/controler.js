class UpdateMonth extends Observer {
  constructor(view){
    super();
    this.view = view;
  }
  update(observable, object){
    this.view.month.innerText = observable.date;
  } 
}

class UpdateAmis extends Observer {
  constructor(view){
    super();
    this.view = view;
  }
  update(observable, object){
    if(this.view.amis){
      this.view.amis.innerHTML = observable.amis;
    }
  } 
}

class Controler {
  constructor(model){
    this.view = new View();
    this.model = model;

    // update
    let updateMonth  = new UpdateMonth(this.view);
    this.model.addObservers(updateMonth);

    let updateAmis  = new UpdateAmis(this.view);
    this.model.addObservers(updateAmis);

    //  action 
      //retour
      this.view.back.addEventListener('click', ()=>{window.history.back();});
      
      //amie
    let actionAmie = (event) => {
      const currentAction = this.model.amis.includes('AJOUTER') ? "ajouter" : "retirer";
      if(currentAction === "ajouter"){
        this.model.setAmis("retirer");
        event.target.classList.remove('inactive', 'btn-primary');
        event.target.classList.add('btn-active');
      } else {
        this.model.setAmis("ajouter");
        event.target.classList.remove('btn-active');
        event.target.classList.add('inactive', 'btn-primary');
      }
    }
    if(this.view.amis){
      this.view.amis.addEventListener('click', actionAmie);
    }

      //modifier 
    if(this.view.modifier){
        this.view.modifier.addEventListener('click', ()=>{alert('Redirection vers la page permettant de modifier le profil')});
    }
      
      //réseaux
    this.view.insta.addEventListener('click', ()=>{window.open('https://www.instagram.com', '_blank')});
    this.view.twitter.addEventListener('click', ()=>{window.open('https://x.com', '_blank')});
    if(this.view.snap){
      this.view.snap.addEventListener('click', ()=>{window.open('https://snapchat.com', '_blank')});
    }

      //calendrier 
    let actionNextMonth = (event) => {
      this.model.next();
      this.model.setCalendrier(this.view.tbody);
    }
    let actionPrevMonth = (event) => {
      this.model.prev();
      this.model.setCalendrier(this.view.tbody);
    }

    this.view.prev.addEventListener('click', actionPrevMonth);
    this.view.next.addEventListener('click', actionNextMonth);

    // permet de lancer une fois les observer pour initialiser la vue
    this.model.setAmis("ajouter");

    let currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    this.model.setDate(year, month);
    this.model.setCalendrier(this.view.tbody);
  }
}