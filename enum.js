var role;
(function (role) {
    role[role["ADMIN"] = 0] = "ADMIN";
    role[role["read"] = 1] = "read";
    role[role["author"] = 2] = "author";
})(role || (role = {}));
;
var personl = {
    name: "viral1",
    age: 19,
    hobbies: ['sport', 'cooking'],
    role: role.read
};
if (personl.role === role.read) {
    console.log("is read");
}
