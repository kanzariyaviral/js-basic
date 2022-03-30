enum role{'ADMIN', 'read', 'author'};

const personl ={
    name:"viral1",
    age:19,
    hobbies:['sport','cooking'],
    role: role.read
};
if(personl.role === role.read){
    console.log("is read");
    
}