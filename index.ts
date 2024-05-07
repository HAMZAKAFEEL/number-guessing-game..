console.log("guess a number between 1 to 8");
//now create avariable
let a:number=Math.floor(Math.random()*7);
import inquirer from "inquirer";
while(true){
    let input=await inquirer.prompt
        ({name: "guess", type:"number",
    message:"guess the number between 1 to 8:"})
    
    //provide code
    let ans:number=input.guess
    if (a==ans)
    {console.log("congractulation your number is correct")
    break;}
    else{console.log("sorry you guess wrong number")}
}
