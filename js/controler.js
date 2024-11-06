class udpateParticipants extends Observer {
    constructor(view) {
        super();
        this.view = view;
    }
    update(observable, object) {
        //Check if user is already in participantsData
        let isParticipating = false;
        for (let i = 0; i < this.view.participantsData.length; i++) {
            if (this.view.participantsData[i].username == observable.user.username) {
                isParticipating = true;
            }
        }
        if(!isParticipating){//If user is not in participantsData add him
            this.view.participantsData[this.view.participantsData.length] = observable.user;
            this.view.displayParticipants();
        }

        //remove user from participantsData
        //=='Quitter' means user clicked on "Quitter"
        if(this.view.participeButton.textContent == 'Quitter'){
            for (let i = 0; i < this.view.participantsData.length; i++) {
                if (this.view.participantsData[i].username == observable.user.username) {
                    this.view.participantsData.splice(i, 1);
                }
            }
            this.view.displayParticipants();
        }
    }
}

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

class updateDate extends Observer {
    constructor(view) {
        super();
        this.view = view;
    }

    update(observable, object) {
        this.view.date.textContent = observable.date;
        this.view.heure.textContent = observable.heure;
        this.view.detailsText.textContent = observable.detail;
    }
}

class Controler {
    constructor(model) {
        this.model = model;
        this.view = new View();
        //init
        const updateDateObserver = new updateDate(this.view, this.model);

        //update
        this.model.addObservers(new udpateParticipants(this.view,this.model));
        this.model.addObservers(new updateButton(this.view,this.model));
        this.model.addObservers(updateDateObserver);

        //action
        this.view.participeButton.addEventListener('click', () => this.participer());

        //init
        updateDateObserver.update(this.model);
    }

    participer() {
        const user =
            { name: 'John Doe', username: '@johndoe' };
        this.model.setParticipants(user);
    }
}