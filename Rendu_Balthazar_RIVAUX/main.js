let popup = document.getElementById("pub"); //prend l'element HTML avec l 'id  pub
let position = 500; //la Positon de depart de la div
let vitesse = -10; //La Vitesse de deplacement de la div
let delay = 3000; //le delai avant de revenir a la positon initiale

setInterval(() => {
  position = position + vitesse; //ajouter la valeur de vitesse à la position actuelle
  popup.style.left = position + "px"; //applique la nouvelle position a la div

  if (position <= -1000) {
    // boucle pour verifie si la div est sortie de l'ecran
    setTimeout(() => {
      position = 500; //Redemarre la position initiale
    }, delay);
  }
}, 100); //dealay avant de recalculer position

let monTexte = document.getElementById("ASIIM"); // Recupère l'element "ASIIM"
let textes = ["AS grenoble", "Made by IIM"]; //Tableau des textes a alterner
let index = 0;

setInterval(() => {
  // Boucle pour changer le texte
  monTexte.innerHTML = textes[index]; // Applique le texte actuel
  index =
    (index + 1) % textes.length; /*Incremente l'index pour passer au texte 
suivant et fais en sorte que les textes se suivent en continu*/
}, 2000); //delay avant entre les changements

let textElement = document.getElementById("TheFlash"); // Récupère l'élément de texte

TheFlash.classList.toggle("flashing"); //met un effet de flash sur le titre
setTimeout(() => {}, 1500); //definis le delay entre le flashs
