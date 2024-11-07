class View {
  constructor(){
    this.div = document.createElement('div');
    this.div.innerHTML = `
      <div class="profil">
        <div class="person">
          <img src="/image/max.png" alt="max">
          <div class="info">
            <h1 id="nom">Max</h1>
            <p>@maxeffort</p>
            <p id="ville">NANTES</p>
            <button id="modifier" class="btn btn-light border">Modifier</button>
          </div>
        </div>
      </div>

      <div class="autres">
        <h3>SPORTS</h3>
        <div class="logo">
          <img src="/image/basket.png">
          <img src="/image/athlé.png">
        </div>
      </div>

      <div class="autres">
        <h3>RÉSEAUX SOCIAUX</h3>
        <div class="logo">
          <img id="insta" src="/image/insta.png">
          <img id="snapchat" src="/image/snap.png">
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
