class Model extends Observable {
    constructor() {
        super();
        this.lieu = this.creerLieu(); // Crée un lieu par défaut au sein du modèle
    }

    // Méthode pour créer les données du lieu
    creerLieu() {
        return new Lieu(
            'image/callofball.jpg',
            'Call Of Ball',
            4.2,
            '3 rue de la Jalousie',
            '44980',
            'Sainte-Luce-sur-Loire',
            [
                new Horaire('lundi'),
                new Horaire('mardi'),
                new Horaire('mercredi'),
                new Horaire('jeudi'),
                new Horaire('vendredi')
            ],
            '06 76 95 06 68',
            'www.callofball.com',
            [
                new Seance('Tournoi 5x5', '2024-10-23', '10:00'),
                new Seance('Tournoi 3x3', '2024-10-23', '12:00'),
                new Seance('Séance libre', '2024-10-23', '15:00')
            ]
        );
    }

    getLieu() {
        return this.lieu;
    }


    ajouterSeance(seance) {
        this.lieu.seances.push(seance);
        this.setChanged();
        this.notifyObservers(seance);
    }

}

class Lieu {
    constructor(image, nom, note,  adresse, codePostal, ville, horaires, telephone, site, seances) {
        this.image = image;
        this.nom = nom;
        this.note = note;
        this.adresse = adresse;
        this.codePostal = codePostal;
        this.ville = ville;
        this.horaires = horaires;
        this.telephone = telephone;
        this.site = site;
        this.seances = seances;
    }

}

class Seance {
    static currentId = 1;

    constructor(nom, date, heure) {
        this.id = Seance.currentId++;
        this.nom = nom;
        this.date = date;
        this.heure = heure;
    }
}

class Horaire {
    constructor(jour, heureDebut = "8:00", heureFin = "18:00") {

        this.jour = jour;
        this.heureDebut = heureDebut;
        this.heureFin = heureFin;
    }
}
