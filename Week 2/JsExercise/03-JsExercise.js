/* 
Exercise 3 - Calculate Power
Write a JavaScript Function to calculate the result of raising a given base to a specified exponent.
*/

function power(base, exponent) {

    let result = 1;

    
    do {
        result *= base;  
        exponent--;     
    } while (exponent > 0);  

    return result; 
}

console.log(power(2, 4));  

