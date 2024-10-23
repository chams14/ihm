class View {
  constructor(){
    this.div = document.createElement('div');

    this.div.innerHTML = `
      <div class='row mt-4'>
        <div class="col-3"></div>
        <div class="col-2 d-flex justify-content-end">
          <button id="buttonPlus" class="btn btn-light border ">+</button>
        </div>
        <div class="col-2">
          <input type="text" id="input" class="form-control" value="0">
        </div>
        <div class="col-2 justify-content-start">
          <button id="buttonMinus" class="btn btn-light border">-</button>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row mt-2">
        <div class="col-3"></div>
        <div class="col-6">
          <select id="list" class="form-select">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="col-3"></div>
      </div>
    `;

    this.buttonPlus = this.div.querySelector('#buttonPlus');
    this.buttonMinus = this.div.querySelector('#buttonMinus');
    this.input = this.div.querySelector('#input');
    this.list = this.div.querySelector("#list")

    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }
}
