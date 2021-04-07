import React from "react";
import QuestOne from "./questone";



const GameAsk =()=>{
  
    
   function FuncTristan(){
       console.log("Knock Knock")
       document.getElementById("sg-hidden").style.display = "block";
       document.getElementById("sg-border").style.display = "none";
   }

  
  
    return(
        <div className={"container1"}>

            <div className={"gridsg"}>

                <div id={"sg-border"} className={"sg-border"}>

                    <h1 className={"sg-word"}>Prêt a commencer le quiz ?</h1>

                    <h5 className={"sg-sub"}>5 question 2 point par question</h5>

                    
                    <button className={"button"} id={"questone"} onClick={FuncTristan}>Enter</button>
                </div>
            </div> 
           
            
            <div id={"sg-hidden"}>
            <QuestOne />

            </div>
           

           

            

        </div>
    )
}

export default GameAsk;