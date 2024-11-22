// implementation class
class Model extends Observable {
    constructor(seanceLieu, user){
        super();
        this.participation = 'Participer';
        this.seance = seanceLieu;
        this.seanceDate = new Date(this.seance.date);
        this.user = user;
        this.dateS = "";
        this.horaires = "";
    }

    setDateSeance(){
        this.dateS = this.seanceDate.toLocaleDateString('fr-FR', {day:'numeric' , month:'short', year:'numeric'});
        let heure = this.seanceDate.getHours()
        let minute = this.seanceDate.getMinutes()
        heure = heure < 10 ? '0'+heure : heure;
        minute = minute < 10 ? '0'+minute : minute;
        this.horaires = heure + "h" + minute;
        this.setChanged();
        this.notifyObservers();
    }

    setInscrit(action){
        action.innerHTML = '';
        this.seance.participants.forEach(p => {
            const li = document.createElement('li');
            li.classList.add('transition_bg', 'mb-4');
            const a = document.createElement('a');
            a.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'text-dark', 'text-decoration-none');
            a.href = `/profil.html?user=${p.nom.toLowerCase()}`;
            a.innerHTML = `<div class="d-flex align-items-center"><img src="${p.photo}" alt="${p.nom}" style="width:10rem;"><div class="text-center fs-4 ms-4"><h3>${p.nom}</h3><p>${p.pseudo}</p></div></div><img class="span" src="../image/details.png" alt="span" style="width: 2rem;">`
            li.appendChild(a);
            if(p.nom == "Max"){
                li.classList.add('green');
                setTimeout(() => {
                    li.classList.remove('green');
                }, 1000);
            }
            action.appendChild(li);            
        })
        this.setChanged();
        this.notifyObservers();
    }

    setParticipation(action, liste){
        if(action === "inscription"){
            this.participation = "Participer";
            this.seance.participants = this.seance.participants.filter(p => p.nom != "Max");
            this.user.seance = this.user.seance.filter(s => s.lieu != "Call Of Ball" && s.date != this.seance.date);
            this.setInscrit(liste);

        } else {
            this.participation = 'Ne plus participer';
            this.seance.participants.push({nom: this.user.nom, pseudo:this.user.pseudo, photo:this.user.photo})
            this.user.seance.push({lieu: this.seance.lieu, date: this.seance.date});
            this.setInscrit(liste);
        }
        this.setChanged();
        this.notifyObservers();
    }
}
