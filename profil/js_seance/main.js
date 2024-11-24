fetch('../profil/data.json')
    .then(response => response.json())
    .then(data => {
        let seance = new URLSearchParams(window.location.search).get('seance');
        if(!seance){
            seance = "s1";
        }
        const donnee = data[seance];
        const user = data.max;
        if(donnee){
            let model = new Model(donnee.seance, user);
            let controler = new Controler(model, donnee);
        } else {
            console.log("erreur : pas de données");
        }
    })  