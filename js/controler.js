class Controler {
    constructor(model) {
        this.view = new View();
        this.model = model;

        // Abonnez la vue aux changements du modèle
        this.model.addObservers(this.view);
        this.view.controller = this;

        const lieu = this.model.getLieu();
        this.view.afficherLieu(lieu);
    }
}
