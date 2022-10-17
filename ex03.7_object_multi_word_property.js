let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

console.log(typeof contact.email);
contact.email = ["RonaldSMurphy@freepost.org", "rsmurphy@briazz.com" ];
console.log(typeof contact.email);

contact.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com" 
};
console.log(typeof contact.email);
console.log(contact.email.work);

delete contact.email.work;

console.log(contact.email.work);
console.log(contact.email.private);

console.log(contact.tel === contact["tel"]);
console.log(contact.email.work === contact["email"]["work"]);

let contact1 = {
	"first name": "Ronald"
};
contact1["first name"] = "Tim";
console.log(contact1["first name"]);

let contact2 = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};
for(let i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(key);
    console.log(contact2[key]);
}
