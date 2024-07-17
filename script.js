// // __________________Exercice 2______________________ 

// //Type string
var nom = 'awa'
console.log(nom + '=' + typeof(nom));

var prenom = 'Awa'
document.getElementById('typeString').innerText = `${prenom} : est de type string`

// //Type number 
var age = 22
console.log(age + '=' + typeof(age));

var age = 22
document.getElementById('typeNumber').innerText = `${age} : est de type Number`

// //Type boolan
var enCours = true
console.log(enCours + '=' + typeof(enCours));

var enCours = true
document.getElementById('typeBoolean').innerText = `${enCours} : est de type boolean`

// //Type undefined
var choix = null;
console.log(null + '=' + typeof(choix));
console.log(typeof ville); //Undefined

var choix = null;
document.getElementById('typeUndefined').innerText = `${choix} : est de type object`


// //Type array
let tab = ['maths', 'sciences', 27, true ['bleu', 'rose']]
console.log(tab);

// ____________________Exercice 3_________________________ 
// Déclarez trois variables x, y et z comme "1", "2" et x+y. Afficher le type et la valeur de chaque variable. Ensuite, forcez le type de x et y à entier et exécutez à nouveau a+b. Afficher le type et la valeur de chaque variable.

var x = 1;
var y = 2;
var z = x+y;

console.log(x + '=' + typeof(x));
console.log(y + '=' + typeof(y));
console.log(z + '=' + typeof(z));

// Force type conversion
x = parseInt(x);
y = parseInt(y);
z = x + y;

console.log(x + y);