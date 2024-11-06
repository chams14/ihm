class updateButton extends Observer {
    constructor(view) {
        super();
        this.view = view;
    }

    update(observable, object) {
        if(this.view.participeButton.textContent == 'Quitter'){
            this.view.participeButton.textContent = 'Participer';
        }else {
            this.view.participeButton.textContent = 'Quitter';
        }
    }
}

class udpateParticipants extends Observer {
    constructor(view) {
        super();
        this.view = view;
    }
    update(observable, object) {
        if(this.view.participantsData != observable.user){
            this.view.participantsData = observable.user;
            console.log('udpateParticipants', this.view.participantsData);
            this.view.displayParticipants();
        }
        if(this.view.participeButton.textContent == 'Quitter') {
            this.view.participantsData = [];
            this.view.displayParticipants();
        }
    }
}

class updateDate extends Observer {
    constructor(view) {
        super();
        this.view = view;
    }

    update(observable, object) {
        console.log('updateDate', observable.date);
        this.view.date.textContent = observable.date;
        this.view.heure.textContent = observable.heure;
        this.view.detailsText.textContent = observable.detail;
    }
}

class Controler {
    constructor(model) {
        this.model = model;
        this.view = new View();

        //update
        this.model.addObservers(new updateButton(this.view,this.model));
        this.model.addObservers(new udpateParticipants(this.view,this.model));
        this.model.addObservers(new updateDate(this.view,this.model));

        //action
        this.view.participeButton.addEventListener('click', () => this.participer());
    }

    participer() {
        const user = [
            { name: 'John Doe', username: '@johndoe' },
        ];
        this.model.setParticipants(user, '14h', '20 Nov. 2024', '-Tournois 5x5');
    }
}