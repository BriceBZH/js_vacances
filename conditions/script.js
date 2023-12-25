// exercice 1
let nom = prompt("Quel est votre nom ?");
let prenom = prompt("Quel est votre prenom ?");
let age = Number(prompt("Quel est votre age ?"));

let confirmation = confirm("Confirmez vous ces informations ?");

if(confirmation) {
    if(age < 13) {
        console.log("Vous n'avez pas accès au site");
    } else if (age >= 13 && age < 18) {
        console.log("Vous avez un accès restreint au site");
    } else {
        console.log("Vous avez un accès complet au site");
    }
} else {
    console.error("Erreur");
}