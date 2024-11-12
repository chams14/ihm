class View extends Observer {
    constructor() {
        super();
        this.div = document.createElement('div');
        this.div.innerHTML =
            `<div class="container mt-5">
                <div class="row">
                    <div class="col-12">
                        <h2 id="lieu-nom" class="text-left mb-4 display-3"></h2>
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
                            <h4 class="mb-4 display-4">Détails</h4>
                            <div class="bg-light p-5 rounded mb-4 d-flex align-items-center">
                                <p class="mb-0 fs-4"><span id="lieu-adresse"></span></p>
                            </div>
                            <div id="lieu-horaires"
                                 class="bg-light p-5 rounded mb-4 d-flex align-items-center justify-content-between"
                                 style="cursor: pointer;">
                                <p class="mb-0 fs-4" id="horaires-texte"></p>
                                <span id="toggle-icon" style="font-size: 1.5em;">▼</span>
                            </div>
                            <div class="bg-light p-5 rounded mb-4 d-flex align-items-center">
                                <p class="mb-0 fs-4"><span id="lieu-telephone"></span></p>
                            </div>
                            <div class="bg-light p-5 rounded mb-4 d-flex align-items-center">
                                <p class="mb-0 fs-4"><a id="lieu-site" href=""></a></p>
                            </div>
                        </div>
                    </div>
                    <hr>
                        <div class="row">
                            <div class="col-12">
                                <h4 class="mb-4 display-4">Séances</h4>
                                <div class="bg-light p-5 rounded mb-4">
                                    <div id="lieu-seances" class="d-flex flex-column align-items-start">
                                        <!-- Boutons séances -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-dark btn-lg m-1">Ajouter une séance</button>
                        </div>
                    </hr>
                </hr>
            </div>`
        ;

        let nodeParent = document.querySelector('#outer');
        nodeParent.appendChild(this.div);

        this.div.querySelector("#lieu-horaires").addEventListener("click", () => {
            this.afficherHorairesSemaine();
        });
    }

    update() {
        this.afficherLieu(this.lieu);
    }

    afficherLieu(lieu) {
        this.lieu = lieu
        document.getElementById('lieu-image').src = lieu.image;
        document.getElementById('lieu-image').alt = lieu.nom;
        document.getElementById('lieu-nom').textContent = lieu.nom;
        document.getElementById('lieu-adresse').textContent = `${lieu.adresse}, ${lieu.codePostal} ${lieu.ville}`;
        document.getElementById('lieu-telephone').textContent = lieu.telephone;
        document.getElementById('lieu-site').href = `https://${lieu.site}`;
        document.getElementById('lieu-site').textContent = lieu.site;

        this.afficherHorairesJour(lieu.horaires);

        const seancesHTML = lieu.seances.map(seance => `
            <div class="d-flex align-items-center w-100">
                <button class="btn btn-primary m-1 w-100 btn-lg text-start seance-btn" data-id="${seance.id}">
                    ${seance.nom} - ${seance.date} à ${seance.heure}
                </button>
                <button class="btn btn-danger m-1 btn-lg supprimer-btn" data-id="${seance.id}">
                    ❌
                </button>
            </div>
        `).join('');

        document.getElementById('lieu-seances').innerHTML = seancesHTML;

        // Écouteur pour chaque bouton de séance (redirection)
        document.querySelectorAll('.seance-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const seanceId = event.target.getAttribute('data-id');
                console.log("Séance ID:", seanceId);
                window.location.href = window.location.origin + '/seance.html?seance=' + seanceId;
            });
        });

        // Écouteur pour chaque bouton de suppression
        document.querySelectorAll('.supprimer-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation(); // Empêche la propagation de l'événement de clic vers le bouton de séance
                const seanceId = parseInt(event.target.getAttribute('data-id'), 10);
                console.log("Suppression de la séance ID:", seanceId);  // Vérifie si l'ID est capturé
                this.controller.supprimerSeance(seanceId); // Appel au contrôleur pour supprimer la séance
            });
        });
    }

    afficherHorairesJour(horaires) {
        const joursFermes = ["samedi", "dimanche"];
        const jourActuel = new Date().toLocaleString('fr-FR', {weekday: 'long'});

        const horairesTexte = document.getElementById('horaires-texte');

        if (joursFermes.includes(jourActuel)) {
            horairesTexte.textContent = "Fermé";
        } else {
            const horaireJour = horaires.find(horaire => horaire.jour === jourActuel);
            horairesTexte.textContent = horaireJour ? `${horaireJour.jour} : ${horaireJour.heureDebut} - ${horaireJour.heureFin}` : "Fermé";
        }
    }

    afficherHorairesSemaine() {
        const horairesTexte = document.getElementById('horaires-texte');
        const toggleIcon = document.getElementById('toggle-icon');

        if (horairesTexte.classList.contains("weekly-view")) {
            horairesTexte.classList.remove("weekly-view");
            this.afficherHorairesJour(this.lieu.horaires);
            toggleIcon.textContent = "▼";
        } else {
            horairesTexte.classList.add("weekly-view");
            horairesTexte.innerHTML = this.lieu.horaires.map(horaire =>
                `<div>${horaire.jour} : ${horaire.heureDebut} - ${horaire.heureFin}</div>`
            ).join('');
            toggleIcon.textContent = "▲";
        }
    }
}
