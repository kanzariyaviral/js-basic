function addAndHandle(n1:number,n2:number,cb:(num:number)=>void) {
    const result =n1 +n2;
    cb(result);
    
}
addAndHandle(5,3,(result)=>{console.log(result)});
/*
let userinput:unknown;
let username:string;

userinput =5;
userinput='max';
username=userinput;   //get error because username and userinput not same type 


solution:-
if (typeof userinput ==='string'){
    username=userinput;
}
/*  */




/*
let userinput:any;
let username:string;

userinput =5;
userinput='max';
username=userinput;*/ // not get error in any types