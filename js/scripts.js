
let romanNumI = ["I", 1];
let romanNumV = ["V", 5];
if (userInput % 1000) {
  userInput - 1000;
  userOutput.concat("M");
} else if (userInput % 500){
  userInput - 500;
  userOutput.concat("D");
} else if (userInput % 100) {
  userInput - 100;
  userOutput.concat("C");
} else if (userInput % 50) {
  userInput - 50;
  userOutput.concat("L");
} else if (userInput % 10) {
  userInput - 10;
  userOutput.concat("X");
} else if (userInput % 5) {
  userInput - 5;
  userOutput.concat("V");
} else if (userInput % 1) {
  userInput - 1;
  userOutput.concat("I");
}


let userOutput = "";