class Model extends Observable {
    constructor() {
        super();
        this.user = {name: 'John Doe', username: '@johndoe'};
        this.heure = '14h';
        this.date = '20 Nov. 2024';
        this.detail = '-Tournois 5x5';
        this.participants = [
            {name: 'Jean', username: '@jean'},
            {name: 'Paul', username: '@paul'},
        ];
    }

    setParticipants() {
        if (!this.isParticipating()){
            this.participants.push(this.user);
        }else {
            for (let i = 0; i < this.participants.length; i++) {
                if (this.participants[i].username === this.user.username) {
                    this.participants.splice(i, 1);
                }
            }
        }
        this.setChanged();
        this.notifyObservers();
    }

    isParticipating() {
        let isParticipating = false;
        for (let i = 0; i < this.participants.length; i++) {
            if (this.participants[i].username === this.user.username) {
                isParticipating = true;
            }
        }
        return isParticipating;
    }

}