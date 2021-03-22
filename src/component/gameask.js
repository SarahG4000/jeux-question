import React from "react";
import QuestOne from "./questone";

const GameAsk =()=>{

    // function FuncTristan(){
    //     // QuestOne();
    //     console.log("Knock Knock !!??")
               
    // }

    document.querySelector("#questone")
            .addEventListener("click",function(){
        document.querySelector().hidden = true;
        document.querySelector().hidden = false;
            }, false);

    return(
        <div className={"container"}>

            <div className={"sg-border"}>

                <p className={"sg-word"}>Welcom to ask game</p>

                

            </div>
            
            <QuestOne className={"sg-hidden"} />

            <button id="questone" onClick={FuncTristan}>Enter</button>

            

        </div>
    )
}

export default GameAsk;