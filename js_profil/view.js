class View {
  constructor({nom, pseudo, ville, photo, sports, reseaux, modifierBtn=false, amisBtn=false}){
    this.div = document.createElement('div');
    this.div.innerHTML = `
      <div class="profil">
        <div class="person">
          <img src="${photo}" alt="${nom}">
          <div class="info">
            <h1 id="nom">${nom}</h1>
            <p>${pseudo}</p>
            <p id="ville">${ville}</p>
            ${modifierBtn ? '<button id="modifier" class="btn btn-light border">Modifier</button>' : ''}
          </div>
        </div>
        ${amisBtn ? '<button id="btnAmi" class="btn btn-light border inactive"></button>' : ''}
      </div>

      <div class="autres">
        <h3>SPORTS</h3>
        <div class="logo">
          ${sports.map(sport => `<img src="${sport}">`).join('')}
        </div>
      </div>

      <div class="autres">
        <h3>RÉSEAUX SOCIAUX</h3>
        <div class="logo">
          ${reseaux.map(({ id, src }) => `<img id="${id}" src="${src}">`).join('')}
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
    this.modifier = this.div.querySelector('#modifier');
    this.insta = this.div.querySelector('#insta');
    this.twitter = this.div.querySelector('#twitter');
    this.snap = this.div.querySelector('#snapchat');

    this.month = this.div.querySelector('#monthYear');
    this.prev = this.div.querySelector('#prev');
    this.next = this.div.querySelector('#next');
    this.tbody = this.div.querySelector('#calendrier tbody');

    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }
}
