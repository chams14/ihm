class Model extends Observable {
    constructor() {
        super();
        this.user = [];
        this.heure = '';
        this.date = '';
        this.detail = '';
    }

    setParticipants(user,heure,date,detail) {
        this.user[0] = user[0];
        console.log('Model setParticipants', this.user);
        this.heure = heure;
        this.date = date;
        this.detail = detail;
        this.setChanged();
        console.log('state', this.state);
        this.notifyObservers();

    }

}