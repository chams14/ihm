class Model extends Observable {
    constructor() {
        super();
        this.user = {name: '', username: ''};
        this.heure = '14h';
        this.date = '20 Nov. 2024';
        this.detail = '-Tournois 5x5';
    }

    setParticipants(user) {
        this.user = user;
        this.setChanged();
        this.notifyObservers();
    }

}