const wins= document.getElementById("wins");
const loses= document.getElementById("loses");
const player= document.getElementById("player");
const opponent= document.getElementById("opponent");
const paper= document.getElementById("paper");
const rock= document.getElementById("rock");
const scissors= document.getElementById("scissors");
let player_wins=0;
let player_loses=0;
let choices = ["rock","paper","scissors"];
let random_choice;
let finish=0;

let score= ()=>{
    if(finish===3){

        if(player_wins>player_loses){
            setTimeout(()=>{
                alert("Congratulation, You Win");
                player_wins=0;
                wins.innerText=0;
                loses.innerText=0;
                player_loses=0;finish=0;},100)  
        }else{
            setTimeout(()=>{
                alert("You Lose, Try again");
                wins.innerText=0;
                player_wins=0;
                player_loses=0;
                loses.innerText=0;
                finish=0;
            },100)  
        }
       
    }
}
let playGame=(choice)=>{
 player.innerText=choice
    player.style.fontSize="20px";
    player.style.fontWeight="bold";
    random_choice=choices[Math.floor(Math.random()*choices.length)]
    opponent.innerText=random_choice;
    opponent.style.fontSize="20px";
    opponent.style.fontWeight="bold";
    if(finish<3){
        if( (choice === "paper" && random_choice === "rock") ||
        (choice === "rock" && random_choice === "scissors") ||
        (choice === "scissors" && random_choice === "paper")){
            player_wins=player_wins+1;
            wins.innerText=player_wins;
            finish=finish+1;
            score();
        }else if(player.innerText===opponent.innerText){
            // console.log("FAIR");
            setTimeout(()=>alert("It is Fair"),100)  
                //   not increment finish
        }else{
            player_loses=player_loses+1;
            loses.innerText=player_loses;
            finish=finish+1;
            score();
        }}
}
paper.addEventListener("click",()=>{
   playGame("paper");
})

rock.addEventListener("click",()=>{
    playGame("rock");
    
})

scissors.addEventListener("click",()=>{
    playGame("scissors");
   
})
