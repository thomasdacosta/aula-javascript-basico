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
    