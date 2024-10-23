
class View {

  constructor(){

    this.div = document.createElement('div');

    this.div.innerHTML = `
      <div class='row mt-4'>
        <div class="col-3"></div>
			<div class="seance">
				Créer une séance
			</div>
			<div class="col-2"> 
				<div id="title"> </div>
			</div>
			<div class="col-2"> 
				<div id="title">
					<!-- <script>
						this.model.title;
					</script> -->
				</div>
				<div id="sport">
					<!-- <script>
						this.model.sport;
					</script> -->
				</div>
			</div>
			<div class="col-2">
				<input type="date">
			</div>
			<div class="col-2">
				<button id="buttonAddSeance" class="btn btn-light border">Ajouter une séance</button>
			</div>
        <div class="col-3"></div>
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
