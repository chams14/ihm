fetch('../profil/data.json')
    .then(response => response.json())
    .then(data => {
        let user = new URLSearchParams(window.location.search).get('user');
        if(!user){
            user = "emma";
        }
        console.log(user);
        const donnee = data[user];
        if(donnee){
            let model = new Model(donnee.seance);
            let controler = new Controler(model, donnee);
        } else {
            console.log("erreur : pas de données");
        }
    })  