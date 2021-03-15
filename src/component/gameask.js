import React from "react";

const GameAsk =()=>{

    function FuncTristan(e){
        e.preventDefault();
        console.log("lien a été cliquer !")
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