console.log("Chargement d\'un module personnalisé");
const module1 = require ( './module1.js');
const calculatrice = require('./calculatrice');
console.log(module1);

const resultat = calculatrice.addition(1,5,6);
console.log(resultat);