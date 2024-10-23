class UpdateTxt extends Observer {
  constructor(view){
    super();
    this.view = view;
  }
  update(observable, object){
    this.view.month.innerText = observable.date;
    this.view.amis.innerHTML = observable.amis;
    //console.log("Date :", observable.x);
  } 
}

class Controler {
  constructor(model){
    this.view = new View();
    this.model = model;

    // update
    let updateTxt  = new UpdateTxt(this.view);
    this.model.addObservers(updateTxt);

    //  action 
      //retour
    this.view.back.addEventListener('click', ()=>{window.location.href='seance.html'});
      
      //amie
    let actionAmie = (event) => {
      const currentAction = this.model.amis.includes('AJOUTER') ? "ajouter" : "retirer";
      console.log(currentAction);

      if(currentAction === "ajouter"){
        this.model.setAmis("retirer");
        event.target.classList.remove('inactive');
      } else {
        this.model.setAmis("ajouter");
        event.target.classList.add('inactive');
      }
    }
    this.view.amis.addEventListener('click', actionAmie);
      
      //réseaux
    this.view.insta.addEventListener('click', ()=>{window.open('https://www.instagram.com', '_blank')});
    this.view.twitter.addEventListener('click', ()=>{window.open('https://x.com', '_blank')});

      //calendrier 
    let actionNextMonth = (event) => {
      this.model.next();
      this.view.calendrier(this.model.getDate());
    }
    let actionPrevMonth = (event) => {
      this.model.prev();
      this.view.calendrier(this.model.getDate());
    }

    this.view.prev.addEventListener('click', actionPrevMonth);
    this.view.next.addEventListener('click', actionNextMonth);

    // permet de lancer une fois les observer pour initialiser la vue
    this.model.setAmis("ajouter");

    let currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    this.model.setDate(year, month);
    this.view.calendrier(currentDate);
  }
}
