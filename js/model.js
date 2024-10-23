// implementation class
class Model extends Observable {
    constructor(){
        super();
        this.currentDate = new Date();
        this.date = this.format(this.currentDate);
        this.amis = '<img src="/image/ajouter.png" alt="ajouter">AJOUTER EN AMI(E)';
    }

    setAmis(action){
        if(action === "ajouter"){
            this.amis = '<img src="/image/ajouter.png" alt="ajouter">AJOUTER EN AMI(E)';
        } else {
            this.amis = '<img src="/image/retirer.png" alt="retirer">RETIRER DES AMI(E)';
        }
        this.setChanged();
        this.notifyObservers();
    }

    setDate(year, month){
        this.currentDate.setFullYear(year);
        this.currentDate.setMonth(month);
        this.date = this.format(this.currentDate);
        this.setChanged();
        this.notifyObservers();
    }

    getDate(){
        return this.currentDate;
    }

    format(date){
        const monthNames = [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ];
        return `${monthNames[date.getMonth()]} ${date.getFullYear()}`; 
    }

    next(){
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.setDate(this.currentDate.getFullYear(), this.currentDate.getMonth());
    }
    prev(){
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.setDate(this.currentDate.getFullYear(), this.currentDate.getMonth());
    }
}
