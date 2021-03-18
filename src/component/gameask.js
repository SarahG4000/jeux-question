import React from "react";
import QuestOne from "./questone";

const GameAsk =()=>{

    function FuncTristan(e){
        e.preventDefault();
        QuestOne();
    }

    return(
        <div className={"container"}>

            <div className={"sg-border"}>

                <p className={"sg-word"}>Welcom to ask game</p>

                

            </div>

            <button onClick={FuncTristan}>Enter</button>

        </div>
    )
}

export default GameAsk;