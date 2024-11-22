class View {
  constructor(){
    this.div = document.createElement('div');
    this.div.innerHTML = `
      <div class="d-flex align-items-center py-3" style="border-bottom: 0.1rem solid grey;">
        <img id="back" src="../../image/flèche.png" alt="retour" class="position-absolute start-0 ms-3" style="height:4vh;">
        <div class="d-flex align-items-center justify-content-center w-100">
          <h2 class="m-0 fw-bold">PROFIL</h2>
        </div>
      </div>

      <div class="container my-5">
        <div class="d-flex flex-column align-items-center">
          <div class="d-flex align-items-center justify-content-center mb-4">
            <img src="../../image/max.png" alt="max" class="img-fluid" style="height: 15rem;">
            <div class="text-center ps-5">
              <h1 id="nom" class="display-3">Max</h1>
              <p class="fs-2 mb-0">@maxeffort</p>
              <p class="fw-bold fs-4" id="ville">NANTES</p>
            </div>
          </div>
          <button id="modifier" class="btn btn-dark border mt-3 fs-5">Modifier</button>
        </div>
      </div>

      <div class="info my-5 mx-5">
        <h3 class="mb-3 fs-2">SPORTS</h3>
        <div class="d-flex">
          <img src="../../image/basket.png" class="me-3">
          <img src="../../image/athlé.png" class="me-3">
        </div>
      </div>

      <div class="info my-5 mx-5">
        <h3 class="mb-3 fs-2">RÉSEAUX SOCIAUX</h3>
        <div class="d-flex">
          <img id="insta" src="../../image/insta.png" class="me-3">
          <img id="snapchat" src="../../image/snap.png" class="me-3">
          <img id="twitter" src="../../image/x.png" class="me-3">
        </div>
      </div>

      <div class="my-5 mx-5">
        <h3 class="mb-3 fs-2">PROCHAINE(S) SÉANCE(S)</h3>
        <div class="calendrier">
          <div class="d-flex justify-content-center align-items-center gap-3 mb-3 mt-4">
              <button id="prev" class="btn btn-light border">◀</button>
              <h3 id="monthYear" class="m-0"></h3>
              <button id="next" class="btn btn-light border ">▶</button>
          </div>
          <table id="calendrier" class="table table-bordered text-center">
              <thead class="table-dark">
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

    this.back = this.div.querySelector('#back');
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
