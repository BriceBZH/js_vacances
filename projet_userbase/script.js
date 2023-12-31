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

//etape 1

function countActiveUsers(users) {
    let nbActiveUsers = 0;
    for(let i=0; i< users.length; i++) {
        if(users[i].isActive) {
            nbActiveUsers++;
        }
    }
    return nbActiveUsers;
}

console.log("We currently have "+countActiveUsers(users)+" active users.");

//etape 2

function getActiveUsers(users) {
    let activeUsers = [];
    for(let i=0; i< users.length; i++) {
        if(users[i].isActive) {
            activeUsers.push(users[i]);
        }
    }
    return activeUsers;
}

let activeUsers = getActiveUsers(users);

function hasBlueEyes(activeUsers) {
    let nbBlueEyes = 0;
    for(let i=0; i< activeUsers.length; i++) {
        if(activeUsers[i].eyeColor === "blue") {
            nbBlueEyes++;
        }
    }
    return nbBlueEyes;
}

console.log(`Out of our currently ${countActiveUsers(users)} active users, ${hasBlueEyes(activeUsers)} have blue eyes.`);

//etape 3

function computeActiveUsersAverageAge(activeUsers) {
    let sumAge = 0;
    for(let i=0; i< activeUsers.length; i++) {
        sumAge += Number(activeUsers[i].age);
    }
    let averageAge = sumAge / activeUsers.length;
    return averageAge;
}
console.log(`Out of our currently ${countActiveUsers(users)} active users, the average age is ${computeActiveUsersAverageAge(activeUsers)}.`);

//etape 4

function getMultronUsers(users) {
    let multronUsers = [];
    for(let i=0; i< users.length; i++) {
        if(users[i].company === "MULTRON") {
            multronUsers.push(users[i]);
        }
    }
    return multronUsers;
}

let nbMultronusers = getMultronUsers(users);

function setMultronToCenturia(users, newCompany) {
    for(let i=0; i< users.length; i++) {
        if(users[i].company === "MULTRON") {
            users[i].company = newCompany;
        }
    }
}

setMultronToCenturia(users, "CENTURIA");

console.log(`${nbMultronusers.length} user companies have been changed from MULTRON to CENTURIA.`);

//etape 5

function getBrownEyedUsers(users) {
    let brownEyes = [];
    for(let i=0; i< users.length; i++) {
        if(users[i].eyeColor === "brown") {
            brownEyes.push(users[i]);
        }
    }
    return brownEyes;
}

let brownEyes = getBrownEyedUsers(users);

function excludeCenturiaWorkers(brownEyes) {
    let nbExcludeCenturia = 0
    for(let i=0; i< brownEyes.length; i++) {
        if(brownEyes[i].company !== "CENTURIA") {
            nbExcludeCenturia++;
        }
    }
    return nbExcludeCenturia;
}

console.log(`${excludeCenturiaWorkers(brownEyes)} users with brown eyes do not work at CENTURIA`);

//etape 6

function getUsersByStatusAndEyesColor(users, userStatus, color) {
    let nbUsers = 0;
    for(let i=0; i< users.length; i++) {
        if(users[i].eyeColor === color && users[i].isActive === userStatus) {
            nbUsers++;
        }
    }
    return nbUsers;
}

console.log(`Out of our brown eyed users ${getUsersByStatusAndEyesColor(users, true, "brown")} are active and ${getUsersByStatusAndEyesColor(users, false, "brown")} are inactive`);

console.log(`Out of our green eyed users ${getUsersByStatusAndEyesColor(users, true, "green")} are active and ${getUsersByStatusAndEyesColor(users, false, "green")} are inactive`);

console.log(`Out of our blue eyed users ${getUsersByStatusAndEyesColor(users, true, "blue")} are active and ${getUsersByStatusAndEyesColor(users, false, "blue")} are inactive`);