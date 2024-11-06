class udpateParticipants extends Observer {
    constructor(view) {
        super();
        this.view = view;
    }
    update(observable, objet) {
        this.view.participantsData = observable.participants;
        this.view.displayParticipants();
    }
}

class updateButton extends Observer {
    constructor(view) {
        super();
        this.view = view;
    }

    update(observable, object) {
        if(observable.isParticipating()) {
            this.view.participeButton.textContent = 'Quitter';
        }else{
            this.view.participeButton.textContent = 'Participer';
        }
    }
}

class updateData extends Observer {
    constructor(view) {
        super();
        this.view = view;
    }

    update(observable, object) {
        this.view.date.textContent = observable.date;
        this.view.heure.textContent = observable.heure;
        this.view.detailsText.textContent = observable.detail;
        this.view.participantsData = observable.participants;
        this.view.displayParticipants();
    }
}

class Controler {
    constructor(model) {
        this.model = model;
        this.view = new View();

        //init
        const loadData = new updateData(this.view, this.model);
        loadData.update(this.model);
        const loadButton = new updateButton(this.view, this.model);
        loadButton.update(this.model);

        //update
        this.model.addObservers(new udpateParticipants(this.view,this.model));
        this.model.addObservers(new updateButton(this.view,this.model));

        //action
        this.view.participeButton.addEventListener('click', () => this.participer());
    }

    participer() {
        this.model.setParticipants();
    }

    isParticipating() {
        let isParticipating = false;
        for (let i = 0; i < this.view.participantsData.length; i++) {
            if (this.view.participantsData[i].username === this.model.user.username) {
                isParticipating = true;
            }
        }
        return isParticipating;
    }
}