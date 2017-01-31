//purpose: takes 2 numbers and returns the greater (higher) number
//signature: takes two given intergers and compares the two and returns the greater interger
//examples:
//        greaterNum(3, 5) --> 5 is greater
//        greaterNum(15, 10) --> 15 is greater

var a = 5;
var b = 10;

function greaterNum(a, b) {
    if (a > b ){
      alert(a + " is the greater number")
    }
    else {
      alert(b + " is the greater number")
    }
}

//The World Translator
//purpose: input a language code and returns "Hello World" for the given code.
//signature: take one argument and return a string.
//examples:
//    helloWorld --> input "es", if "es" alert "hola mundo"

// var es = "Hola Mundo"
// var de = "Hej Verden"
// var en = "Hello World"

function helloWorld(str) {
  if (str === "es") {
    alert( "Hola Mundo");
  }
  else if (str === "de") {
    alert( "Hej Verden");
  }
  else {
    alert( "Hello World");
  }
}

//The Grade Assigner
//purpose:take an argument and a number score, return with a letter grade
//signature:takes an argument and a integer score and returns a string
//examples:

              // assignGrade ()



// A = 90-100
// B = 80-89
// C = 70-79
// D = 60-69
// F = 0-59


function assignGrade(num) {
  if (num >= 90) {
    alert("You got an A!");
  }
  else if (num >= 80 && num <=89){
      alert("You got a B");
  }
  else if (num >= 70 && num <=79){
      alert("You got a C");
  }
  else if (num >= 60 && num <=69){
      alert("You got a D");
  }
  else {
      alert("You Fail");
  }
}




//The Pluralizer
// Purpose:take 2 arguments (nouns & numbers) and return with a pluralized form
// Signature:retuning a string containing an interger and pluralized noun
// If number is greater than one, alert pluralized name.
// Examples:
// num < 1 alert( num + " " + name )
// num > 1 alert( num + " " + name + "s" )

function pluralizeIt(name, num) {
  if ( num > 1 && !("sheep" || "geese" || "children" || "people" || "species")  ) {
    alert( num + " " + name + "s" );
  }
  else {
    alert(num + " " + name );
  }
}
// Must enter function as pluralizeIt("animal", 4) with animal name wrapped in quotations to denote a string.


//The Odd and Even
// Purpose:
// Signature:
// Examples:

//(count % 2 === 0)

var count = -1;

  while (count < 15) {
    count = count +1;

  if (count % 2 === 0 ) {
    alert(count  + " is even!")
  }
  else {
    alert(count + " is odd." )
  }
}

//The Fizz Buzz
//The Odd and Even
// Purpose:
// Signature:
// Examples:

// multiples of *3 --> count = count +3
// multiples of *5 --> count = count +5
// multiple of 3 and 5

var count = 0;

  while (count <= 100) {
    count = count +1;

  if (count % 15 === 0 ) {
    console.log( count + " Fizz Buzz" )
  }
  else if (count % 3 === 0) {
    console.log( count + " Fizz" )
  }
  else if(count % 5 === 0) {
    console.log( count + " Buzz")
  }

}


//Hi/Lo
// Purpose:
// Signature:
// Examples:


// min - 0 , max - 100
// if num > 100 prompt too higher
// if num < 0 prompt too low
// if num === getRandomInt --> "Good guess, you win!"


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;

  while (getRandomInt(min, max) === false) {
    prompt("Guess a number between 1 and 100")

      if (num > getRandomInt()) {
        prompt("Too High");
      }
      else if (num < getRandomInt()) {
        prompt("Too Low");
      }
      else if (num === getRandomInt()) {
        prompt("Good guess, you win!")
      }
  }
}
