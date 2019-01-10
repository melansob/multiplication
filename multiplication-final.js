// MultiPractice Kata by Ben M

//Initializations
var name,x = 0,y = 0,solution = 0,userInput,stop = false,wrongAnswers = 0,totalQuestions,wrong;

name = prompt("what is your name? if you write stop here then you wont be asked any questions");
totalQuestions = prompt("Welcome "+name+". How many questions would you like me to ask you?");

for (question = 1; question <= totalQuestions; question++) 
{
  wrongAnswers += multiPractice();
} // end for loop
//start checking answers and see if you are Charlie Bucket.
if ((wrongAnswers < totalQuestions && wrongAnswers == 0) && (name != "Charlie Bucket"))
{
  alert("Great job "+name+"!");
} 
else if ((wrongAnswers < totalQuestions && wrongAnswers == 0) && (name == "Charlie Bucket"))
{
  alert("Charlie my boy, you won!");
}
//if the answers are wrong and name is still Charlie Bucket.
if ((wrongAnswers <= totalQuestions || wrongAnswers == totalQuestions) && (name != "Charlie Bucket")){
  alert("You got "+wrongAnswers+" out of "+totalQuestions+" questions wrong");
  alert("press F5 or the \"Run\" button to play again")
} else if ((wrongAnswers <= totalQuestions || wrongAnswers == totalQuestions) && (name == "Charlie Bucket")){
  alert("YOU LOSE!! Good Day Sir! >:(");
  alert("I SAID Good Day! >:(");
}
function multiPractice(){
  //sets wrong to 0
  wrong = 0;
  //random number for x
  x = Math.floor(Math.random()*7)+3;
  //random number for y
  y = Math.floor(Math.random()*7)+3;
  //random numbers calculated and saved into solution
  solution = x*y;
  /*Start While*/
  //Check if user input is not the solution and that STOP has NOT been written in the feild
  while (userInput != solution && stop == false){
    //Prompt User to type in a answer into the Input 
    userInput = prompt(name+", what is "+x+" * "+y+ " equal to?");
    /*Start If's*/
    //Check if first condition has been met.
    if (userInput == solution){
      //this is if user wrote the correct answer for the current question.
      alert("Correct!");
    }
    //if stop is written into the userInput. [NOTE:stop should not be written in the name section. It would be messy and you would be named stop whilst it would run]
    else if (userInput == "Stop"|| userInput == "stop"){
      //if the user wrote stop in userInput
      alert("Too hard "+name+"?");
      //set stop = true
      stop = true;
    } 
    else if (name == "Stop"|| name == "stop"){
      alert("You stopped here? I will not give you any questions right now")
      stop = true;
    }
    else {
      //if the answer is not equal to the current question
      alert("Incorrect answer");
      //set wrong = 1 
      wrong = 1;
    }
  }
  //return wrong
  return wrong;
}
