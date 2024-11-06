class Model extends Observable {
    constructor() {
        super();
        this.user = [];
        this.heure = '14h';
        this.date = '20 Nov. 2024';
        this.detail = '-Tournois 5x5';
    }

    setParticipants(user) {
        this.user[0] = user[0];
        console.log('Model setParticipants', this.user);
        this.setChanged();
        console.log('state', this.state);
        this.notifyObservers();

    }

}