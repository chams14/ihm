// implementation class
class Model extends Observable {
    constructor(seanceUser){
        super();
        this.currentDate = new Date();
        this.date = this.format(this.currentDate);
        this.amis = '';
        this.seance = seanceUser;
    }

    setAmis(action){
        if(action === "ajouter"){
            this.amis = '<img src="../image/ajouter.png" alt="ajouter" class="img-fluid me-2" style="height: 1.5rem;">AJOUTER EN AMI(E)';
        } else {
            this.amis = '<img src="../image/retirer.png" alt="retirer" class="img-fluid me-2" style="height: 1.5rem;">RETIRER DES AMI(E)';
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

    getSeance(){
        return this.seanceEmma;
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

    setCalendrier(tbody) {
        tbody.innerHTML = " "; // Vide le tableau pour régénérer les jours
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        // Obtenir le premier jour du mois et le dernier jour du mois
        const firstDay = new Date(year, month, 1).getDay(); // 0 = Dimanche, 1 = Lundi
        const lastDate = new Date(year, month + 1, 0).getDate(); // Dernier jour du mois
        
        // Ajuster le premier jour pour que lundi soit le premier jour de la semaine
        const startDay = (firstDay === 0 ? 6 : firstDay - 1);
    
        let row = document.createElement('tr');
        let day = 1;
    
        // Créer des cellules vides avant le premier jour du mois
        for (let i = 0; i < startDay; i++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
    
        // Créer des cellules pour chaque jour du mois
        for (let i = startDay; i < 7; i++) {
            const cell = document.createElement('td');
            let currentDate = new Date(year, month, day)
            cell.innerText = day++;
            this.seance.forEach(s => {
                let seanceDate = new Date(s.date)
                if(seanceDate.toDateString() === currentDate.toDateString()){
                    const divS = document.createElement('div');
                    divS.classList.add('seance_cal', 'd-inline-block','me-0','mt-2', 'p-2');
                    let heure = seanceDate.getHours()
                    let minute = seanceDate.getMinutes()
                    heure = heure < 10 ? '0'+heure : heure;
                    minute = minute < 10 ? '0'+minute : minute;
                    divS.innerHTML = "<strong>"+s.lieu+"</strong>"+ "<br>"+ heure +"h"+ minute;
                    const lineBreak = document.createElement('br');
                    cell.appendChild(lineBreak);
                    cell.appendChild(divS);
                    cell.classList.add('px-0');
                }
            })
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    
        // Continuer à ajouter des jours
        while (day <= lastDate) {
            row = document.createElement('tr');
            for (let i = 0; i < 7 && day <= lastDate; i++) {
                const cell = document.createElement('td');
                let currentDate = new Date(year, month, day)
                cell.innerText = day++;
                this.seance.forEach(s => {
                    let seanceDate = new Date(s.date)
                    if(seanceDate.toDateString() === currentDate.toDateString()){
                        const divS = document.createElement('div');
                        divS.classList.add('seance_cal', 'd-inline-block','me-0','mt-2', 'p-2');
                        let heure = seanceDate.getHours()
                        let minute = seanceDate.getMinutes()
                        heure = heure < 10 ? '0'+heure : heure;
                        minute = minute < 10 ? '0'+minute : minute;
                        divS.innerHTML = "<strong>"+s.lieu+"</strong>"+ "<br>"+ heure +"h"+ minute;
                        const lineBreak = document.createElement('br');
                        cell.appendChild(lineBreak);
                        cell.appendChild(divS);
                        cell.classList.add('px-0');
                    }
                })
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        }
    }
}