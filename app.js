function add(num1, num2, showresult, phrase) {
    var result = num1 + num2;
    if (showresult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.5;
var pr = true;
var rp = "result is : ";
add(number1, number2, pr, rp);
