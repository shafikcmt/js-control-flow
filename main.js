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
document.write('<hr>');
document.write('<h4>Write a JavaScript program that takes a day of the week as input (using numbers 1-7, where 1 represents Monday and 7 represents Sunday) and prints whether it is a weekday or a weekend.</h4>');

function checkDay(day){
    if(day >= 1 && day <=5){
        document.write('This is: WeekDay' +'<br>');
    }else if(day>=6 && day <= 7){
        document.write('This is: WeekEnd' +'<br>');
    }else{
        document.write('This is: Invalid Day' +'<br>');
    }
}
checkDay(2);
checkDay(6);
checkDay(8);