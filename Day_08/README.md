## Day 08

#### Exercise : Level 1

1) Create an empty object called dog
```js
let dog = {};
```

2) Print the the dog object on the console
```js
console.log(dog);
```

3) Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
```js
dog.name = "Lassie";
dog.legs = 4;
dog.color = "Brown";
dog.age = 2;
dog.bark = function () {
  return "woof woof";
};
```

4) Get name, legs, color, age and bark value from the dog object
```js
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
```

5) Set new properties the dog object: breed, getDogInfo
```js
dog.breed = "German Shephard";
dog.getDogInfo = function () {
  return dog.name, dog.legs, dog.color, dog.age, dog.bark(), dog.breed;
};
```

#### Exercise : Level 2

```js
const users = require("./assets/users");
const countries = require("./assets/countries");
```

1) Find the person who has many skills in the users object.
```js
let arrValues = [];
let arrKeys = [];
arrValues.push(Object.values(users));
arrKeys.push(Object.keys(users));
let arr2 = [];
for (let i of arrValues) {
  for (let j of i) {
    arr2.push(j.skills.length);
  }
}
let maximum = Math.max(...arr2);
let index = arr2.indexOf(maximum);
console.log(arrKeys[0][index]);
```

2) Count logged in users, count users having greater than equal to 50 points from the following object.
```js
let usersValues = [];
let usersKeys = [];
usersValues.push(Object.values(users));
usersKeys.push(Object.keys(users));
let loggdInUsers = [];
for (let i of usersValues) {
  for (let j of i) {
    if (j.isLoggedIn === true && j.points >= 50) {
      loggdInUsers.push(usersValues[0].indexOf(j));
    }
  }
}
for (let k of loggdInUsers) {
  console.log(usersKeys[0][k]);
}
```

3) Find people who are MERN stack developer from the users object
```js
let mernStackDevelopers = [];
let mernStackDevelopersValues = [];
let mernStackDevelopersKeys = [];
mernStackDevelopersValues.push(Object.values(users));
mernStackDevelopersKeys.push(Object.keys(users));
for (let i of mernStackDevelopersValues) {
  for (let j of i) {
    if (
      j.skills.includes("MongoDB") &&
      j.skills.includes("Express") &&
      j.skills.includes("React") &&
      j.skills.includes("Node")
    ) {
      mernStackDevelopers.push(mernStackDevelopersValues[0].indexOf(j));
    }
  }
}
for (let k of mernStackDevelopers) {
  console.log(usersKeys[0][k]);
}
```

4) Set your name in the users object without modifying the original users object
```js
users.Praneeth = {
    email: 'example@praneeth.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express'],
    age: 26,
    isLoggedIn: true,
    points: 50
}
```

5) Get all keys or properties of users object
```js
let keysInUsers = [];
keysInUsers.push(Object.keys(users))
```
```js
let valuesInUsers = [];
valuesInUsers.push(Object.values(users))
```

6) Get all the values of users object
```js
let valuesOfUsers = [];
valuesOfUsers.push(Object.values(users))
```

7) Use the countries object to print a country name, capital, populations and languages.
```js
for (let i of countries) {
  console.log(i.name, i.capital, i.population, i.languages)
}
```

#### Exercise : Level 3


