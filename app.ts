function add(num1 : number, num2 : number,showresult: boolean,phrase: string){
    const result= num1+num2;
    if (showresult){
        console.log(phrase + result);
    }else{
        return result;
    }
}
const number1 = 5;
const number2 = 2.5;
const pr =true;
const rp ="result is : ";
add(number1,number2,pr,rp);