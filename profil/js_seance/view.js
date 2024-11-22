class View {
  constructor({lieu, sport, seance}){
    this.div = document.createElement('div');
    this.div.innerHTML = `
      <div class="d-flex align-items-center py-3" style="border-bottom: 0.1rem solid grey;">
        <img id="back" src="../image/flèche.png" alt="retour" class="position-absolute start-0 ms-3" style="height:4vh;">
        <div class="d-flex align-items-center justify-content-center w-100">
          <h2 class="m-0 fw-bold">SÉANCE</h2>
        </div>
      </div>

      <div class="d-flex flex-column align-items-cenger p-4">
        <div class="d-flex justify-content-center align-items-center mb-3"> 
          <img src="../image/localisation.png" alt="loc" class="img-fluid" style="height:5rem;">
          <div class="text-center mt-4">
            <h2 class="fw-bold fs-1 mb-0">${lieu}</h2>
            <p class="fs-3">${sport}</p>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <h4 class="jour px-3 py-2 rounded mx-2 fs-3" style="background-color: #d0d0d0;"></h4>
          <h4 class="heure px-3 py-2 rounded mx-2 fs-3" style="background-color: #d0d0d0;"></h4>
        </div>
      </div>

      <div class="pt-5 ps-5 pe-5 mb-5" style="border-top: 0.05rem solid grey;">
        <h3 class="mb-3 fs-2">DÉTAILS</h3>
        <ul>
        ${seance.details.map(info => `<li class="fs-5">${info}</li>`).join('')}
        </ul>
      </div>

      <div class="pt-5 ps-5 pe-5 mb-5" style="border-top: 0.05rem solid grey;">
        <h3 class="mb-3 fs-2">PARTICIPANTS</h3>
        <div class="inscrit">
          <ul class="list_inscrit p-0 list-unstyled"></ul>
        </div>
        <div class="d-flex justify-content-center">
          <button id="btnParticipation" class="btn btn-dark border fs-5"></button>
        </div>
      </div>  
    `;

    this.back = this.div.querySelector('#back');
    this.participation = this.div.querySelector('#btnParticipation');
    this.jour = this.div.querySelector('.jour');
    this.heure = this.div.querySelector('.heure');
    this.inscrit = this.div.querySelector('.list_inscrit');
    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }
}