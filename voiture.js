const voiture = document.getElementsByClassName('ferrari-arriere');
var etoileg = document.getElementsByClassName('.etoile-coupe-gauche');
var charles = document.getElementsByClassName('charles');
var ferraricote = document.getElementsByClassName('ferrari-cote')[0];
var question = document.getElementsByClassName('question')[0];
var ferraridevant = document.getElementsByClassName('ferrari-devant')[0];
var explication = document.querySelector(".explication");


document.querySelectorAll(".ferrari-arriere").forEach(voiture => {
    voiture.addEventListener("click", () => {
        voiture.classList.toggle("ferrari-arriere-active");
        explication.classList.add("explication-active");
    });
});

document.querySelectorAll(".etoile-coupe-gauche").forEach((etoileg, index) => {
    etoileg.addEventListener("click", () => {
        etoileg.classList.toggle("etoile-coupe-gauche-active")
        for (var i = 0; i < charles.length; i++) {
            charles[i].classList.toggle("charles-active");
            setTimeout((index) => {
                charles[index].classList.remove("charles-active");
                ferraricote.classList.add("ferrari-cote-active");
                question.classList.add('question-active');
            }, 2000, i);
        }

    });
});
// Récupérer les éléments de réponse
const reponses = document.querySelectorAll('.reponse');
var ferraridevant = document.querySelector('.ferrari-devant');
var etoileentiere1 = document.querySelector('.etoile-entiere-1');
var devinette = document.querySelectorAll(".devinette")[0];
var etoileentiere2 = document.querySelector('.etoile-entiere-2')[0];

// Ajouter un écouteur d'événement à chaque réponse
reponses.forEach(reponse => {
    reponse.addEventListener('click', function () {
        const reponseSelectionnee = this;
        const estBonneReponse = reponseSelectionnee.classList.contains('bonne');

        // Modifier les classes en fonction de la réponse sélectionnée
        reponses.forEach(reponse => {
            if (reponse === reponseSelectionnee) {
                if (estBonneReponse) {
                    reponse.classList.add('gg-question');
                    question.classList.remove("question-active");
                    ferraricote.classList.remove("ferrari-cote-active");
                    etoileentiere1.classList.add("etoile-entiere-1-active");

                    ferraridevant.classList.add("ferrari-devant-active");


                    for (var i = 0; i < charles.length; i++) {
                        charles[i].classList.toggle("charles-active");
                        setTimeout((index) => {
                            charles[index].classList.remove("charles-active");
                            devinette.classList.add("devinette-active");
                            etoileg.classList.remove("etoile-coupe-gauche-active");
                        }, 2000, i);

                    };
                } else {
                    reponse.classList.add('fausse');
                }
            }
        });

        // Afficher un message en fonction de la réponse sélectionnée
        const pop = document.getElementById('pop');
        if (estBonneReponse) {
            pop.innerText = 'Bonne réponse !!!';
            pop.classList.add("bonne-rep");
            pop.classList.remove("mauvaise-rep");


        } else {
            pop.innerText = 'Mauvaise réponse ! Réessayer! ';
            pop.classList.add("mauvaise-rep");
        }
    });
});

var etoileentiere2 = document.querySelector(".etoile-entiere-2");
var johnny = document.querySelector(".johnny-image");
var salut = document.querySelector(".salut");
var metroid = document.querySelector(".metroid");
var poulpe = document.querySelector(".poulpe");
var photoleclerc = document.querySelector(".photo-leclerc");
var poulpe1 = document.querySelector(".poulpe1");

document.querySelector("#MYform").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupération de la réponse de l'utilisateur
    var reponseUtilisateur = document.getElementById("reponseInput").value;

    // Vérification de la réponse
    const popd = document.getElementById("popd");
    if (reponseUtilisateur.toLowerCase() === "ferrari") {
        devinette.classList.remove("devinette-active");
        for (var i = 0; i < charles.length; i++) {
            charles[i].classList.toggle("charles-active");
            setTimeout((index) => {
                charles[index].classList.remove("charles-active");
                etoileentiere2.classList.add("etoile-entiere-2-active");
                johnny.classList.add("johnny-image-active");
                salut.classList.add("salut-active");
                setTimeout((index) => {
                    johnny.classList.remove("johnny-image-active");
                    johnny.classList.add("johnny-image-active2");
                    salut.classList.remove("salut-active");
                    metroid.classList.add("metroid-active");
                    poulpe.classList.add("poulpe-active");
                    setTimeout((index) => {
                        poulpe.classList.remove("poulpe-active");
                        poulpe1.classList.add("poulpe1-active");
                    }, 5000, i);
                    setTimeout((index) => {
                        photoleclerc.classList.add("photo-leclerc-active");
                    }, 20000, i);
                }, 6000, i);
            }, 3000, i);
        };

        popd.innerText = "Bonne réponse !!!";
        popd.classList.add("bonne-rep");
        popd.classList.remove("mauvaise-rep");
    } else {
        popd.innerText = "Mauvaise réponse! Veuillez réessayer.";
        popd.classList.add("mauvaise-rep");
    }
});





