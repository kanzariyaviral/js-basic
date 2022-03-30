let toyota ={
    drive(){
        return 'driving toyota';
    },
    break(){
        return 'breaking toyota';
    }
};
let camry = {
    wifi(){
        return 'wifi of carmy';
    }
};
//Object.assign(camry,toyota);
//let copytoyota = Object.assign({},toyota);
//console.dir(camry);
//console.dir(copytoyoya);
Object.assign(toyota,{
    ac(){
        return 'useing ac'
    },color: 'black'
});
console.dir(toyota)