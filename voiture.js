const voiture = document.getElementsByClassName('ferrari-arriere');
var etoileg = document.getElementsByClassName('etoile-coupe-gauche');
var charles = document.getElementsByClassName('charles');
var ferraricote = document.getElementsByClassName('ferrari-cote')[0];
var question = document.getElementsByClassName('question')[0];
var ferraridevant = document.getElementsByClassName('ferrari-devant')[0];
var explication = document.querySelector('.explication');

const clap = new Audio('image/clap.wav');

document.querySelectorAll(".ferrari-arriere").forEach(voiture => {
    voiture.addEventListener("click", () => {
        voiture.classList.toggle("ferrari-arriere-active");
        explication.classList.add("explication-active");
        clap.play();
        clap.loop = true;
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
var q1 = document.querySelector(".q1");
var johnnyface = document.querySelector(".johnny-face");

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
                clap.pause();
                johnnyface.classList.add("johnny-face-active");
                salut.classList.add("salut-active");
                setTimeout((index) => {
                    johnnyface.classList.remove("johnny-face-active");
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
                        setTimeout((index) => {
                            photoleclerc.classList.add("photo-leclerc-flou");
                            q1.classList.add("q1-active");

                        }, 6000, i);
                    }, 10000, i);
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

var question1 = document.querySelector("#question-1");
var etoileentiere3 = document.querySelector(".etoile-entiere-3");
var q2 = document.querySelector(".q2");
var recommence1 = document.querySelector("#recommence-1");
var fin = document.querySelector(".fin");

document.querySelector("#ma-question-1").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupération de la réponse de l'utilisateur
    var reponseUtilisateur = document.getElementById("reponseInput1").value;

    // Vérification de la réponse

    if (reponseUtilisateur.toLowerCase() === "17") {


        for (var i = 0; i < charles.length; i++) {
            charles[i].classList.toggle("charles-active");
            setTimeout((index) => {

                q1.classList.remove("q1-active");
                photoleclerc.classList.remove("photo-leclerc-active");
                metroid.classList.remove("metroid-active");
                poulpe1.classList.remove("poulpe1-active");

                setTimeout((index) => {
                    johnny.classList.remove("johnny-image-active2");
                    johnny.classList.add("johnny-image-active3");
                }, 4000, i);
            }, 2000, i);
            setTimeout((index) => {
                charles[index].classList.remove("charles-active");
                etoileentiere3.classList.add("etoile-entiere-3-active");
            }, 2000, i);
            setTimeout((index) => {
                fin.classList.add("fin-active");
            }, 5000, i);


        };
        q1.innerText = "Bonne réponse !!!";
        q1.classList.add("bonne-rep");
        q1.classList.remove("mauvaise-rep");

    } else {
        question1.innerText = "Mauvaise réponse! Veuillez réessayer";
        recommence1.innerText = "La photo revient pour 10s !!!";
        question1.classList.add("mauvaise-rep");
        setTimeout(() => {
            q1.classList.remove("q1-active");
            photoleclerc.classList.remove("photo-leclerc-flou");
        }, 4000, i);

        setTimeout((index) => {
            photoleclerc.classList.add("photo-leclerc-active");
            setTimeout((index) => {
                photoleclerc.classList.add("photo-leclerc-flou");
                q2.classList.add("q2-active");

            }, 6000, i);

        }, 10000, i);
    };

});

var question2 = document.querySelector("#question-2")
var q3 = document.querySelector(".q3");
var recommence2 = document.querySelector("#recommence-2");


document.querySelector("#ma-question-2").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupération de la réponse de l'utilisateur
    var reponseUtilisateur = document.getElementById("reponseInput2").value;

    // Vérification de la réponse

    if (reponseUtilisateur.toLowerCase() === "16") {


        for (var i = 0; i < charles.length; i++) {
            charles[i].classList.toggle("charles-active");
            setTimeout((index) => {

                q2.classList.remove("q2-active");
                photoleclerc.classList.remove("photo-leclerc-active");
                metroid.classList.remove("metroid-active");
                poulpe1.classList.remove("poulpe1-active");
                setTimeout((index) => {
                    johnny.classList.remove("johnny-image-active2");
                    johnny.classList.add("johnny-image-active3");
                }, 4000, i);
            }, 2000, i);
            setTimeout((index) => {
                charles[index].classList.remove("charles-active");
                etoileentiere3.classList.add("etoile-entiere-3-active");
            }, 2000, i);
            setTimeout((index) => {
                fin.classList.add("fin-active");
            }, 5000, i);

        };
        q2.innerText = "Bonne réponse !!!";
        q2.classList.add("bonne-rep");
        q2.classList.remove("mauvaise-rep");

    } else {
        question2.innerText = "Mauvaise réponse! Veuillez réessayer.";
        recommence2.innerText = "La photo revient pour 10s !!!";
        question2.classList.add("mauvaise-rep");
        setTimeout(() => {
            q2.classList.remove("q2-active");
            photoleclerc.classList.remove("photo-leclerc-flou");
        }, 4000, i);

        setTimeout((index) => {
            photoleclerc.classList.add("photo-leclerc-active");
            setTimeout((index) => {
                photoleclerc.classList.add("photo-leclerc-flou");
                q3.classList.add("q3-active");

            }, 6000, i);

        }, 10000, i);
    };

});



var question3 = document.querySelector("#question-3");


document.querySelector("#ma-question-3").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupération de la réponse de l'utilisateur
    var reponseUtilisateur = document.getElementById("reponseInput3").value;

    // Vérification de la réponse

    if (reponseUtilisateur.toLowerCase() === "cheval") {


        for (var i = 0; i < charles.length; i++) {
            charles[i].classList.toggle("charles-active");
            setTimeout((index) => {
                q3.classList.remove("q3-active");
                photoleclerc.classList.remove("photo-leclerc-active");
                metroid.classList.remove("metroid-active");
                poulpe1.classList.remove("poulpe1-active");
                setTimeout((index) => {
                    johnny.classList.remove("johnny-image-active2");
                    johnny.classList.add("johnny-image-active3");
                }, 4000, i);
            }, 2000, i);
            setTimeout((index) => {
                charles[index].classList.remove("charles-active");
                etoileentiere3.classList.add("etoile-entiere-3-active");
            }, 2000, i);
            setTimeout((index) => {
                fin.classList.add("fin-active");
            }, 5000, i);


        };
        q3.innerText = "Bonne réponse !!!";
        q3.classList.add("bonne-rep");
        q3.classList.remove("mauvaise-rep");

    } else {
        question3.innerText = "Mauvaise réponse! Veuillez réessayer.";
        question3.classList.add("mauvaise-rep");
    };

});
