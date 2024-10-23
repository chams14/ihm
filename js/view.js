class View {
  constructor(){
    this.div = document.createElement('div');
    this.div.innerHTML = `
      <div class="profil">
        <div class="person">
          <img src="/image/emma.png" alt="emma">
          <div class="info">
            <h1 id="nom">Emma</h1>
            <p>@emma_44</p>
            <p id="ville">NANTES</p>
          </div>
        </div>
        <button id="btnAmi" class="btn btn-light border">
        </button>
      </div>

      <div class="autres">
        <h3>SPORTS</h3>
        <div class="logo">
          <img src="/image/basket.png">
        </div>
      </div>

      <div class="autres">
        <h3>RÉSEAUX SOCIAUX</h3>
        <div class="logo">
          <img id="insta" src="/image/insta.png">
          <img id="twitter" src="/image/x.png">
        </div>
      </div>

      <div class="autres">
        <h3>PROCHAINE(S) SÉANCE(S)</h3>
        <div class="calendrier">
          <div class="head_cal">
              <button id="prev" class="btn btn-light border">◀</button>
              <h3 id="monthYear"></h3>
              <button id="next" class="btn btn-light border ">▶</button>
          </div>
          <table id="calendrier">
              <thead>
                  <tr>
                      <th>Lun</th>
                      <th>Mar</th>
                      <th>Mer</th>
                      <th>Jeu</th>
                      <th>Ven</th>
                      <th>Sam</th>
                      <th>Dim</th>
                  </tr>
              </thead>
              <tbody></tbody>
          </table>
        </div>
      </div>
    `;

    this.back = document.getElementById('textTitle').querySelector('img');
    this.amis = this.div.querySelector('#btnAmi');
    this.insta = this.div.querySelector('#insta');
    this.twitter = this.div.querySelector('#twitter');

    this.month = this.div.querySelector('#monthYear');
    this.prev = this.div.querySelector('#prev');
    this.next = this.div.querySelector('#next');
    this.tbody = this.div.querySelector('#calendrier tbody');

    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }

  calendrier(date) {
    this.tbody.innerHTML = " "; // Vide le tableau pour régénérer les jours
    
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // Obtenir le premier jour du mois et le dernier jour du mois
    const firstDay = new Date(year, month, 1).getDay(); // 0 = Dimanche, 1 = Lundi
    const lastDate = new Date(year, month + 1, 0).getDate(); // Dernier jour du mois
    
    // Ajuster le premier jour pour que lundi soit le premier jour de la semaine
    const startDay = (firstDay === 0 ? 6 : firstDay - 1);

    let row = document.createElement('tr');
    let day = 1;

    // Créer des cellules vides avant le premier jour du mois
    for (let i = 0; i < startDay; i++) {
        const cell = document.createElement('td');
        row.appendChild(cell);
    }

    // Créer des cellules pour chaque jour du mois
    for (let i = startDay; i < 7; i++) {
        const cell = document.createElement('td');
        cell.innerText = day++;
        row.appendChild(cell);
    }
    this.tbody.appendChild(row);

    // Continuer à ajouter des jours
    while (day <= lastDate) {
        row = document.createElement('tr');
        for (let i = 0; i < 7 && day <= lastDate; i++) {
            const cell = document.createElement('td');
            cell.innerText = day++;
            row.appendChild(cell);
        }
        this.tbody.appendChild(row);
    }
  }
}
