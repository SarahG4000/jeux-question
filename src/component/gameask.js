import React from "react";
import QuestOne from "./questone";



const GameAsk =()=>{
  
    
   function FuncTristan(){
       console.log("Knock Knock")
       document.getElementById("sg-hidden").style.display = "block";
       document.getElementById("sg-border").style.display = "none";
   }

  
  
    return(
        <div className={"container"}>

            <div id={"sg-border"} className={"sg-border"}>

                <h1 className={"sg-word"}>Welcom to ask game</h1>

                
                <button id={"questone"} onClick={FuncTristan}>Enter</button>
            </div>
            
            <div id={"sg-hidden"}>
            <QuestOne />

            </div>
           

           

            

        </div>
    )
}

export default GameAsk;