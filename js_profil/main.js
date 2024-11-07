fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        //const user = new URLSearchParams(window.location.search).get('user');
        //const donnee = data[user];
        const donnee = data.emma;
        if(donnee){
            let model = new Model(donnee.seance);
            let controler = new Controler(model, donnee);
        } else {
            console.log("erreur : pas de données");
        }
    })  