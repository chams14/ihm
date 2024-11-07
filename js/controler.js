// Controller
class Controler {
    constructor(model) {
        this.view = new View();
        this.model = model;

        const lieu = this.model.getLieu();
        this.view.afficherLieu(lieu);
    }
}

