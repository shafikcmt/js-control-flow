document.write('<h4>Write a JavaScript program that takes a number as input and prints whether the number is positive, negative, or zero.</h4>');

function checkNumber(n){
    if(n>0){
        document.write(`Number is: Positive <br>`);
    }
    else if(n<0){
        document.write(`Number is: Negitive <br>`);
    }else{
        document.write(`Number is: Zero <br>`);
    }
}
checkNumber(5);
checkNumber(-5);
checkNumber(0);