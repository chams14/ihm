fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        const seance = new URLSearchParams(window.location.search).get('seance');
        const donnee = data[seance];
        const user = data.max;
        if(donnee){
            let model = new Model(donnee.seance, user);
            let controler = new Controler(model, donnee);
        } else {
            console.log("erreur : pas de données");
        }
    })  