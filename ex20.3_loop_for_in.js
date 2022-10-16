let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    console.log(key); // -> name, surname, age, email
}

for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
}
