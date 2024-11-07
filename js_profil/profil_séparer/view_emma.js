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
        <button id="btnAmi" class="btn btn-light border inactive"></button>
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
}
