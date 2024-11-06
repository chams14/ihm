class View {
  constructor() {
    // Création d'une structure de base
    this.div = document.createElement('div');

    // Structure HTML de base ajoutée dans le constructeur
    this.div.innerHTML = `
        <div class="container mt-5">
            <div class="row">
                <div class="col-12">
                    <h2 id="lieu-nom" class="text-left mb-4 display-3"></h2> <!-- Increased font size -->
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center mb-5">
                    <img id="lieu-image" src="" alt="Lieu Image" class="img-fluid">
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12">
                    <h4 class="mb-4 display-4">Détails</h4> <!-- Increased font size -->
                    <div class="bg-light p-5 rounded mb-4 d-flex align-items-center"> <!-- Increased padding -->
                        <p class="mb-0 fs-4"><strong></strong> <span id="lieu-adresse"></span></p> <!-- Increased font size -->
                    </div>
                    <div class="bg-light p-5 rounded mb-4 d-flex align-items-center"> <!-- Increased padding -->
                        <p class="mb-0 fs-4"><strong></strong> <span id="lieu-horaires"></span></p> <!-- Increased font size -->
                    </div>
                    <div class="bg-light p-5 rounded mb-4 d-flex align-items-center"> <!-- Increased padding -->
                        <p class="mb-0 fs-4"><strong></strong> <span id="lieu-telephone"></span></p> <!-- Increased font size -->
                    </div>
                    <div class="bg-light p-5 rounded mb-4 d-flex align-items-center"> <!-- Increased padding -->
                        <p class="mb-0 fs-4"><strong></strong> <a id="lieu-site" href=""></a></p> <!-- Increased font size -->
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12">
                    <h4 class="mb-4 display-4">Séances</h4> <!-- Increased font size -->
                    <div class="bg-light p-5 rounded mb-4">
                        <div id="lieu-seances" class="d-flex flex-column align-items-start">
                            <!-- Buttons will be inserted here -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button class="btn btn-dark btn-lg m-1">Ajouter une séance</button> <!-- Increased button size -->
            </div>
        </div>
        `;

    // Ajouter cette structure dans un élément parent existant (par exemple #outer)
    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }

  // Méthode pour afficher le lieu et les séances dynamiquement
  afficherLieu(lieu) {
    // Mise à jour des éléments avec les données du lieu
    document.getElementById('lieu-image').src = lieu.image;
    document.getElementById('lieu-image').alt = lieu.nom;
    document.getElementById('lieu-nom').textContent = lieu.nom;
    document.getElementById('lieu-adresse').textContent = `${lieu.adresse}, ${lieu.codePostal} ${lieu.ville}`;
    document.getElementById('lieu-horaires').textContent = lieu.horaires;
    document.getElementById('lieu-telephone').textContent = lieu.telephone;
    document.getElementById('lieu-site').href = `https://${lieu.site}`;
    document.getElementById('lieu-site').textContent = lieu.site;

    // Construction du contenu des séances
    let seancesHTML = lieu.seances.map(seance => `
            <button class="btn btn-primary m-1 w-100 btn-lg">${seance.nom} - ${seance.date} à ${seance.heure}</button>
        `).join('');

    document.getElementById('lieu-seances').innerHTML = seancesHTML;
  }
}
