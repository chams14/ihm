class Controler {

    constructor(model) {

        this.view = new View();
        this.model = model;
        this.creerLieu();
    }

    creerLieu() {
        // Création d'une instance de Lieu
        const lieu1 = new Lieu(
            'image/callofball.jpg',
            'Call Of Ball',
            4.2,
            '3 rue de la Jalousie',
            '44980',
            'Sainte-Luce-sur-Loire',
            '08:00-18:00',
            '06 76 95 06 68',
            'www.callofball.com',
            [new Seance('Tournoi 5x5', '2024-10-23', '10:00'),
                new Seance('Tournoi 3x3', '2024-10-23', '12:00'),
                new Seance('Séance libre', '2024-10-23', '15:00')
            ]
        );
        this.view.afficherLieu(lieu1);
    }

}
