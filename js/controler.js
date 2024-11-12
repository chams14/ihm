class Controler {
    constructor(model) {
        this.view = new View();
        this.model = model;

        this.model.addObservers(this.view);
        this.view.controller = this;

        const lieu = this.model.getLieu();
        this.view.afficherLieu(lieu);
    }

    supprimerSeance(seanceId) {
        console.log("Contrôleur: suppression de la séance ID", seanceId);
        this.model.supprimerSeance(seanceId);
    }
}
