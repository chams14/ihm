class View {
  constructor(){
    this.div = document.createElement('div');
    this.div.innerHTML = `
      <div class="seance_details lieu">
        <div class="lieu"> 
          <img src="/image/localisation.png" alt="loc">
          <div class="text">
            <h2>Call Of Ball</h2>
            <p>Basketball</p>
          </div>
        </div>
        <div class="date_seance">
          <h4 class=jour>20 Novembre</h4>
          <h4 class=heure>14h</h4>
        </div>
      </div>
      <div class="seance_details details">
        <h3>DÉTAILS</h3>
        <ul>
          <li>Tournois 5x5</li>
          <li>Équipes faites sur place</li>
          <li>Tous niveaux</li>
        </ul>
      </div>
      <div class="seance_details details">
        <h3>PARTICIPANTS</h3>
        <div class="inscrit">
          <ul class="list_inscrit"></ul>
        </div>
        <button id="btnParticipation" class="btn btn-light border"></button>
      </div>      
    `;

    this.back = document.getElementById('textTitle').querySelector('img');
    this.participation = this.div.querySelector('#btnParticipation');
    this.jour = this.div.querySelector('.jour');
    this.heure = this.div.querySelector('.heure');
    this.inscrit = this.div.querySelector('.list_inscrit');
    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }
}