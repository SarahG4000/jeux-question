import React from "react";
import { useFormik } from 'formik';
import QuestTwo from "./questtwo";

const QuestOne =()=>{

    // function NextQuest(e){
    //     e.preventDefault();
    //     function QuestTwo();
    // }
    const formik = useFormik({

        initialValues: {
   
          reponse: '',
   
        },
   
        onSubmit: values => {
   
            console.log(values);
        //   alert(JSON.stringify(values, null, 2));
   
        },
   
      });

      let good ="golden gate"

      function NextQuest(){
        if(formik.values == good){
            console.log("Knock Knock"); 
            document.getElementById("sg-hidden2").style.display = "block";
            document.getElementById("sg-border2").style.display = "none";
        
      }else{
          console.log("faux!!");
      }
      }
     

    return(
        <div className={"container2"} id={"sg-hidden"}>

            <div className={"gridsg"}>
                <div id={"sg-border2"} className={"sg-border"}>

                <h1 className={"sg-word"}>Comment s'appelle le célébre pont rouge de San fransico ??</h1>
                <form onSubmit={formik.handleSubmit} className={"sg-sub"}>
                   
                    <input type={"text"} 
                        name={"reponse"} 
                        id={"reponse"}
                        onChange={formik.handleChange}
                        value={formik.values.reponse}
                        
                        />
                  
                    <button className={"button"} 
                            id={"sg-position"} 
                            type="submit" 
                            value="Envoyer"
                            onClick={NextQuest}>Valider</button>
                </form>
                    {/* <button onClick={}>Next >Quest</button> */}
                
                </div>
            </div>

            <div id={"sg-hidden2"}>
            <QuestTwo />

            </div>
           
        </div>
    )
}

export default QuestOne;