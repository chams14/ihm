
class View {

  constructor(){

    this.div = document.createElement('div');

    this.div.innerHTML = `
        <div class="center">
		<div id="seance">
			<b>CRÉER UNE SÉANCE</b>
		</div>
		<div id="titre"> </div>
		<div id="sport"> </div>
		<input type="date" id="date">
		<input type="time" id="time">
		<br>
		<div id="details">
			<b>DÉTAILS</b>
		</div>
		<div id="textFieldContainer"> </div>
		<button class="buttonPlus">+</button>
		<br>
		<button id="buttonAddSeance" class="btn btn-light border">Ajouter la séance</button>
	</div>
      </div>
    `;
	
    this.title = this.div.querySelector('#titre');
    this.sport = this.div.querySelector('#sport');
    
    this.date = this.div.querySelector('#date');
    this.time = this.div.querySelector('#time');
    
    this.buttonPlus = this.div.querySelector('#buttonPlus');
    this.buttonAddSeance = this.div.querySelector('#buttonAddSeance');

    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }
}
