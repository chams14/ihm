
class View {

  constructor(){

    this.div = document.createElement('div');

    this.div.innerHTML = `
        <div class="center">
		<div id="seance">
			<b>Créer une séance</b>
		</div>
		<div id="title"> </div>
		<div id="sport"> </div>
		<input type="date">
		<br>
		<button id="buttonAddSeance" class="btn btn-light border">Ajouter une séance</button>
	</div>
      </div>
    `;
	
    this.title = this.div.querySelector('#title');
    this.sport = this.div.querySelector('#sport');
    this.buttonAddSeance = this.div.querySelector('#buttonAddSeance');
	
    /*this.buttonPlus = this.div.querySelector('#buttonPlus');
    this.buttonMinus = this.div.querySelector('#buttonMinus');
    this.input = this.div.querySelector('#input');*/

    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }
}

/*      <div class="col-2 d-flex justify-content-end">
          <button id="buttonPlus" class="btn btn-light border ">+</button>
        </div>
        <div class="col-2">
          <input type="text" id="input" class="form-control" value="0" disabled>
        </div>
        <div class="col-2 justify-content-start">
          <button id="buttonMinus" class="btn btn-light border">-</button>
        </div>*/
