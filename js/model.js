

// implementation class

class Model extends Observable {

    constructor(){
        super();
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
    constructor(nom, date, heure) {
        this.nom = nom;
        this.date = date;
        this.heure = heure;
    }
}
