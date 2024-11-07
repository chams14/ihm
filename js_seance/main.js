fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        const donnee = data.callOfBall;
        const user = data.max;
        if(donnee){
            let model = new Model(donnee.seance[0], user);
            let controler = new Controler(model);
        } else {
            console.log("erreur : pas de données");
        }
    })  