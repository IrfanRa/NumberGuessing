import inquirer from "inquirer";

//type alias 
type anyType = {
    userGuess: number
}

//generate random no. by declaring a variable using math.floor & random func
const systemGeneratedNo = Math.floor (Math.random() * 10);

//take input from user
const ask: anyType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Enter your guess no."
    }
])

//set condition
const {userGuess} = ask;

if(userGuess === systemGeneratedNo || 2){
    //console.log(userGuess, "userGuess", systemGeneratedNo, "SGN");
    console.log("Yeah!! Your Entered No. is Corrrect \n You Won!!");
} else {
    console.log("Your Entered No. is incorrect. Please Try again!!!!");
    
}