fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // ici et uniquement ici j'ai accès à mon tableau de données
        afficher(data);
    });

// rôle : afficher les cartes recettes
// paramètre : les recettes.du tableau de recette
// return : rien

function afficher(tableauRecette) {
    tableauRecette.forEach(recette => {

        let titre = recette.nom;
        let description = recette.desc;
        let tempPreparation = recette.tempPreparation;
        let tempCuisson = recette.tempCuisson;
        let portions = recette.portions;
        let ingredientsli = liste(recette.ingredients);
        let etapesLi = etape(recette.etapes);
        let srcImg = recette.img;


        // images

        document.getElementById("cardContainer").innerHTML += `
             <div class="card">
            <div class="flex gap16 align-center">
                <h1>${titre}</h1>
                
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">favorite</span></a>
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">
                    share
                    </span></a>   
                
            </div>
            <!-- 3 colonnes -->
           
            <div class="flex align-start gap32 mt-16">
                <!-- Partie images -->
                <div class="large-3">
                    <div class="align-start flex gap16">
                        <div class="large-12">
                            <img src="${srcImg[0]}" alt="" class="responsive">
                            <div class="legende">${titre}</div>
                        </div>
                        <div class="large-4">
                            <img src="${srcImg[1]}" alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src="${srcImg[2]}" alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src="${srcImg[3]}" alt="" class="responsive">
                        </div>    
                    </div>
                </div>
                <!-- Partie ingredients-->
                <div class="gap32 large-3">
                    <div class="flex gap16">
                        <p  class="etiquette"><span class="material-icons material-icons-outlined">
                            restaurant
                            </span>4</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            alarm
                            </span>30min</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            local_fire_department
                            </span>30min</p>
                    </div>
                    <div>
                        <h2>Détails</h2>
                        <p class="text-orange">
                            ${description}
                        </p>
                    </div>
                    <div>
                        <h2>Ingrédients</h2>
                        <ul>
                            ${ingredientsli}
                        </ul>
                    </div>

                </div>
                <!-- Partie etapes -->
                <div class="large-6">
                    <h2>Etapes</h2>
                    <ol>
                        ${etapesLi}
                    </ol>
                </div>
            </div>
        </div>
    `;
    });
}


function liste(ingredients) {
    let listeIgd = ""
    ingredients.forEach(i => { listeIgd += `<li>${i.quantite}${i.unite}${i.aliment}</li>` })
    return listeIgd
}

function etape(etapes) {
    let recetteEtape = ""
    etapes.forEach(i => { recetteEtape += `<li> ${i.numeroEtape}${i.descEtape}</li>` })
    return recetteEtape
}





fetch('data.article.json')
    .then(response => response.json())
    .then(data => {
        // ici et uniquement ici j'ai accès à mon tableau de données
        afficherArticle(data);
    });


// Rôle : afficher les articles.
// paramètre : tableau "les articles, chacun avec les propriétés" :
// return : rien

function afficherArticle(tableauArticle) {
    tableauArticle.forEach(article => {
        let titre = article.titre;
        let resume = article.resume;
        let date = article.date;
        let auteur = article.auteur;
        let srcImg = article.img;


        document.getElementById("cardContainer").innerHTML += `
         <div class="card large-6 flex gap align-center">
            <!-- partie gauche -->
            <img src="${srcImg}"
                alt="" class="large-6 img-card" />

            <!-- partie de droite -->
            <div class="large-6 flex gap-12 ">
                <h3>${titre}</h3>
                <div class="flex justify-between large-12 align-center">
                    <p>
                        ${date}
                    </p>
                    <p>${auteur}</p>

                </div>
                <p>${resume}</p>
                <!-- bouton -->
                <div class="flex justify-between large-12 align-center">
                    <p class="btn marginLire">lire l'article</p>
                </div>
            </div>
        </div>`

    });
}
