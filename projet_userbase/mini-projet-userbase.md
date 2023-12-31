# Mini Projet : base utilisateurs

##  Étape 0 :

Dans le dossier `sites/js/res04-js-j2`, créez un dossier `mini-projet`.

## Étape 0.5 : les données

Voici les données que vous devrez utiliser pour le mini projet :

```js

let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];

```

## Étape 1 : Compter les utilisateurs et utilisatrices actif-ve-s

Exemple de structure pour vous aider à démarrer :

```js

function countActiveUsers(users) {

}

console.log(`We currently have ${ countActiveUsers(users) } active users.`);

```

## Étape 2 : Parmis les utilisateurs et utilisatrices acti-f-ves combien ont les yeux bleus ?

Exemple de structure pour vous aider à démarrer :

```js

function getActiveUsers(users) {

}

function hasBlueEyes(activeUsers) {

}

console.log(`Out of our currently ${} active users, ${} have blue eyes.`);

```

## Étape 3 : Parmis les utilisateurs et utilisatrices actif-ve-s quel est l'âge moyen ?

Exemple de structure pour vous aider à démarrer :

```js

function getActiveUsers(users) {

}

function getActiveUsersAges(users) {

}

function computeActiveUsersAverageAge(ages) {

}

console.log(`Out of our currently ${} active users, the average age is ${}.`);

```

## Étape 4 : Rachat de MULTRON par CENTURIA

Tous nos `users` dont la `company` est MULTRON doivent à présent avoir la `company` CENTURIA.

Exemple de structure pour vous aider à démarrer :

```js

function getMultronUsers(users) {

}

function setMultronToCenturia(users) {

}

console.log(`${} user companies have been changed from MULTRON to CENTURIA.`);

```

## Étape 5 : qui a les yeux marrons et ne travaille pas chez CENTURIA ?

Exemple de structure pour vous aider à démarrer :

```js

function getBrownEyedUsers(users) {

}

function excludeCenturiaWorkers(users) {

}

console.log(`${} users with brown eyes do not work at CENTURIA`);

```

## Étape 6 : pour chacune des couleurs d'yeux, compter le nombre de users actif-ve-s et inactif-ve-s

Exemple d'affichage pour vous aider à démarrer :

```js

console.log(`Out of our brown eyed users ${} are active and ${} are inactive`);

console.log(`Out of our green eyed users ${} are active and ${} are inactive`);

console.log(`Out of our blue eyed users ${} are active and ${} are inactive`);


```