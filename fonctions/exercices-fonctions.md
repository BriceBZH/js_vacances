## Exercice 0

Dans le dossier `sites/js/res04-js-j2` créez un dossier `exercices-fonctions`.

## Exercice 1 : Créer des fonctions pour les opérations de base

Créer une fonction `add` qui prend deux nombres en paramètres, et en retourne la somme.

Créer une fonction `sub` qui prend deux nombres en paramètres, et en retourne la différence.

Créer une fonction `mult` qui prend deux nombres en paramètres, et en retourne le produit.

Créer une fonction `div` qui prend deux nombres en paramètres, et en retourne le quotient.

Créer une fonction `mod` qui prend deux nombres en paramètres, et en retourne le reste.

```js

// Pour tester
console.log(add(21, 21)); // doit afficher 42
console.log(sub(63, 21)); // doit afficher 42
console.log(mult(21, 2)); // doit afficher 42
console.log(div(84, 2)); // doit afficher 42
console.log(mod(42, 2)); // doit afficher 0
```


## Exercice 2 : une fonction pour interroger l'utilisateur

Créer une fonction `askUserOperation` qui demande à l'utilisateur quelle opération il veut faire, et renvoie cette valeur.

Créer une fonction `askUserFirstNumber` qui demande à l'utilisateur de choisir un premier nombre, et renvoie cette valeur.

Créer une fonction `askUserSecondNumber` qui demande à l'utilisateur de choisir un second nombre, et renvoie cette valeur.


## Exercice 3 : une fonction pour les gouverner toutes

Créer une fonction `calculator` qui va appeler les fonctions de l'exercice 2 pour récupérer les infos de l'utilisateur puis va appeler les fonctions de l'exercice 1 selon ce qu'a choisi l'utilisateur.

🔵  N'oubliez pas d'appeler votre fonction `calculator` à la fin de votre code pour que cela puisse fonctionner