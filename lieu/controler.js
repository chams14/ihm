// Controller
class Controler {
    constructor(model) {
        this.view = new View();
        this.model = model;

        this.model.addObservers(this);

        this.view.controller = this;
        const lieu = this.model.getLieu();
        this.afficherLieu(lieu);

        document.getElementById('creation').addEventListener('click', ()=>{alert('Redirection vers la page permettant de créer une séance')});
    }

    update() {
        this.afficherLieu(this.model.getLieu());
    }

    afficherLieu(lieu) {
        this.view.lieu = lieu;

        document.getElementById('fav').addEventListener('click', (event) => {
            const favIcon = event.target;
            if (favIcon.src.includes('star.png')) {
                favIcon.src = './image/star2.png';
            } else {
                favIcon.src = './image/star.png';
            }
        });
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

        document.querySelectorAll('.seance-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const seanceId = event.target.getAttribute('data-id');
                console.log("Séance ID:", seanceId);
                window.location.href = window.location.origin + '/profil/seance.html?seance=s' + seanceId;
            });
        });

        document.querySelectorAll('.supprimer-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                const seanceId = parseInt(event.target.getAttribute('data-id'), 10);
                console.log("Suppression de la séance ID:", seanceId);
                this.supprimerSeance(seanceId);
            });
        });
    }

    afficherHorairesJour(horaires) {
        const joursFermes = ["samedi", "dimanche"];
        const jourActuel = new Date().toLocaleString('fr-FR', { weekday: 'long' });

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
            this.afficherHorairesJour(this.model.getLieu().horaires);
            toggleIcon.textContent = "▼";
        } else {
            horairesTexte.classList.add("weekly-view");
            horairesTexte.innerHTML = this.model.getLieu().horaires.map(horaire =>
                `<div>${horaire.jour} : ${horaire.heureDebut} - ${horaire.heureFin}</div>`
            ).join('');
            toggleIcon.textContent = "▲";
        }
    }

    supprimerSeance(seanceId) {
        console.log("Contrôleur: suppression de la séance ID", seanceId);
        this.model.supprimerSeance(seanceId);
    }
}
