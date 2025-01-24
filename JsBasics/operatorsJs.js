// //1. Assignment operator (=) -> right to left associativity
// let a = 10;
// let num1 = a;
// let num2 = num1 = 50; // num2 = ( num1 = 50) is the internally works

// // 2 Arithmetic operator +, -, *, /, %(modulo) => returns reminder
// console.log(10+5);
// console.log(10-5);
// console.log(10*5);
// console.log(10/5);
// console.log(10%5);
// // 3. More Arithmetic operators (++, --, +, -, **)
// let i = 10;
// i++; //i = i+ 1; = 11
// console.log(i);
// i++; //i = i+ 1; = 12
// console.log(i);
// console.log(++i); // returns 13(increment and use)
// console.log(i++); // returns 13(use and increment)
// let b = +10;
// let c = -10;
// // '**' power
// c = c**2
// //4.Augmented +=, -=,*=, /=, *%
// i+=1;
// console.log(i);

// /* refer more about other operators 
// at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators */
// a = "fdbfhjd";
// length.a
/*let number1 = 17
let i=2;
for(;i<Math.sqrt(number1)+1; i++){
    console.log(number1%i);
    if (number1%i == 0){
        console.log("Not prime")
        break;
    }

}*/
/*function sumOfPrimeNumbers(limit) {
    let answer = 0; // Variable to store the sum of all prime numbers
  
    // Iterate through all numbers from 0 to the given limit
      let divisorCount;
       for(let i = 2; i<= limit; i++){
       // Inside the first loop create a variable to count the number of divisors of i
        divisorCount = 0
          for (let j = 1; j<= i; j++){
      // Check how many numbers divide i without a remainder by using nested loop
              if(i%j == 0){
                divisorCount += 1;
              }
      // If count equals 2, then i is a prime number
          }
          if (divisorCount == 2){
            console.log(i)
              answer += i
          }
          
      }
  
    // Return the sum of all prime numbers between 0 and limit
    return answer;
  }
  console.log(sumOfPrimeNumbers(50)) */


  function main(tempF) {
    let result;
  
    // Step 1: Convert the temperature from Fahrenheit to Celsius.
      let tempC = (tempF - 32) * 5/9;
    // Step 2: Store the converted temperature in a new variable. 
      if (tempC.toFixed(1)>= 37){
    // Step 3: Check if the rounded temperature is 37°C or higher with the help of if and else condition
          result = "You have a fever! Your temperature is " + tempC.toFixed(1) + "°C.";
      }else{
          result = tempC.toFixed(1)
      }
    // Use the toFixed() method to format converted temperature in celcius to one decimal place.
  
    return result;
  }
  console.log(main(98.6));
  lastIndexOf(fgf)