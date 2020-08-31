
// Day 0: Hello, World!

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable)

    // Write a line of code that prints parameterVariable to stdout using console.log:

}

//day 0: data types

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(firstInteger + parseInt(secondInteger));
    console.log(firstDecimal + parseFloat(secondDecimal));
    console.log(firstString + secondString);
}

//DAY 1 ARTHMETIC OPERATORS
function getArea(length, width) {
    let area;
    // Write your code here
    area= length * width;
    return area;
}


function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter=2*(length+width);
    return perimeter;
}

//DAY 1 FUNCTIONS
function factorial(n){
    if(n === 0){
        return 1;
    } else{
        return n * factorial(n-1);
    }
}

//DAY 1 LET AND CONSTS
let area;
    let perimeter;
    const PI = Math.PI;
    const r = (readLine());
 
    // Print the area of the circle:
    area= PI *r*r;
    console.log(area);
    // Print the perimeter of the circle:
perimeter= 2*PI*r;
console.log(perimeter);


//DAY 2 loops
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var i;
    for(i=0; i<s.length ; i++)
    {
        if(s[i]=='a' || s[i]=='e'|| s[i]=='i' || s[i]=='o' || s[i]=='u')
        {
            console.log(s[i]);
          //  console.log('\n');
        }
    }
     for(i=0; i<s.length ; i++)
    {
        if(s[i]=='b' || s[i]=='c'|| s[i]=='d' || s[i]=='f' ||  s[i]=='g' || s[i]=='h' || s[i]=='j'|| s[i]=='k' || s[i]=='l' || s[i]=='m' || s[i]=='n' || s[i]=='p' || s[i]=='q' ||s[i]=='r' || s[i]=='s'|| s[i]=='t' || s[i]=='v' ||s[i]=='w' || s[i]=='x' || s[i]=='y' || s[i]=='z')
        {
            console.log(s[i]);
          //  console.log('\n');
        }
    }
}
 //DAY 2 IF ELSE
 'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    let grade;
    // Write your code here0<=score && score<=30
if(25 < score && score<= 30)
{
grade='A';
return grade;
}
else if(20< score  && score <= 25)
{
grade='B';
return grade;
}
else if(15< score  && score <= 20)
{
grade='C';
return grade;
}
else if(10< score  && score<= 15)
{
grade='D';
return grade;
}
else if(5< score  && score<= 10)
{
grade='E';
return grade;
}
else 
{
grade='F';
return grade;
}
    return grade;
}

//DAY 2 SWITCH

function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0])
    {
        case "a" || "e" || "i" || "o" || "u" :
           letter = "A";
            break;
             case "b" || "c" || "d" || "f" || "g" :
           letter = "B";
            break;
             case "h" || "j" || "k" || "l" || "m" :
           letter = "C";
            break;
             default:
           letter = "D";
            break;
        }
           
    
    return letter;
}

//DAY 3

function getSecondLargest(nums) {
    // Complete the functionl
   let largest;
   let loop;
   let second;
   if(nums[0] > nums[1]) {
      largest = nums[0];
      second  = nums[1];
   } else {
      largest = nums[1];
      second  = nums[0];
   }

   for(loop = 2; loop < 10; loop++) {
      if( largest < nums[loop] ) {
         second = largest;
         largest = nums[loop];
      } else if( second < nums[loop] ) {
         second =  nums[loop];
      }
   }

    return second;
}

day 3 try catch
function reverseString(s) {
    { try { if (typeof(s)!=="string"){ throw ("s.split is not a function") } else{ s=s.split("").reverse().join(""); }

}catch(err){ console.log(err) } finally{ console.log(s); } }
}

//day 3 throw
function isPositive(a) {
    if(a>0)
        return "YES";
    else
    { if(a==0)
        return "Zero Error";
    else
        return "Negative Error";
    }
}

// DAY 4 COUNT OBJECTS

function getCount(objects) {
    var ctr = 0;
    for(var i=0; i<objects.length; i++){
      if(objects[i].x == objects[i].y) {
        ctr++;
      }
    }
    return ctr;
}
// day 5

    Rectangle.prototype.area = function() {
        return(this.w*this.h);
    };
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
   
    class Square extends Rectangle {
        constructor(s) {
            super(s);
            this.h = s;
            this.w = s;
        }
    };
    
//day 7 regex
let re = /^([aeiou]).+\1$/;
