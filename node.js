// Using JS only
import fs from "fs";
  let game=["rock","paper","scissor"]
    let bot=game[Math.floor(Math.random()*game.length)]
    console.log("bot: ",bot);
let player_choice= fs.readFileSync(0,"utf8").toLowerCase().trim()
let Rock_Paper_Scissor=(player)=>{
    if(bot===player){
        console.log("fair"); 
    }
    else if(player==="rock" && bot==="scissor"){
        console.log("Congratulation, You win!");
    }else if(player==="scissor" && bot==="paper"){
        console.log("Congratulation, You win!");
    }else if(player==="paper" && bot==="rock"){
        console.log("Congratulation, You win!");
    }else{
        console.log(" Sorry ,You fail ");
    }       
}
Rock_Paper_Scissor(player_choice)