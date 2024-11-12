class View extends Observer {
    constructor() {
        super();
        this.div = document.createElement('div');
        this.div.innerHTML =
            `<div class="container mt-5">
                <div class="row">
                    <div class="col-12 d-flex align-items-center justify-content-between">
                        <h2 id="lieu-nom" class="text-left mb-4 display-3">Nom du lieu</h2>
                        <img id="fav" src="./image/star.png" alt="favoris" class="fav-icon">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <img id="lieu-image" src="" alt="Lieu Image" class="img-fluid">
                    </div>
                </div>
                <hr>
                    <div class="row">
                        <div class="col-12">
                            <h4 class="mb-4 display-4">Détails</h4>
                            <div class="bg-light p-5 rounded mb-4 d-flex align-items-center">
                                <p class="mb-0 fs-4"><span id="lieu-adresse"></span></p>
                            </div>
                            <div id="lieu-horaires"
                                 class="bg-light p-5 rounded mb-4 d-flex align-items-center justify-content-between"
                                 style="cursor: pointer;">
                                <p class="mb-0 fs-4" id="horaires-texte"></p>
                                <span id="toggle-icon" style="font-size: 1.5em;">▼</span>
                            </div>
                            <div class="bg-light p-5 rounded mb-4 d-flex align-items-center">
                                <p class="mb-0 fs-4"><span id="lieu-telephone"></span></p>
                            </div>
                            <div class="bg-light p-5 rounded mb-4 d-flex align-items-center">
                                <p class="mb-0 fs-4"><a id="lieu-site" href="" class="text-decoration-none text-body"></a></p>
                            </div>
                        </div>
                    </div>
                    <hr>
                        <div class="row">
                            <div class="col-12">
                                <h4 class="mb-4 display-4">Séances</h4>
                                <div class="bg-light p-5 rounded mb-4">
                                    <div id="lieu-seances" class="d-flex flex-column align-items-start">
                                        <!-- Boutons séances -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button id="creation" class="btn btn-dark btn-lg m-1">Création de séance</button>
                        </div>
                    </hr>
                </hr>
            </div>`
        ;

        let nodeParent = document.querySelector('#outer');
        nodeParent.appendChild(this.div);

        this.div.querySelector("#lieu-horaires").addEventListener("click", () => {
            this.controller.afficherHorairesSemaine();
        });
    }
}
