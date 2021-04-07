import React from "react";
import { useFormik } from 'formik';
// import QuestTwo from "../component/questtwo";

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
   
          alert(JSON.stringify(values, null, 2));
   
        },
   
      });

    return(
        <div className={"container2"}>

            <div className={"gridsg"}>
                <div id={"sg-border"} className={"sg-border"}>

                <h1 className={"sg-word"}>Comment s'appelle le célébre pont rouge de San fransico ??</h1>
                <form className={"sg-sub"}>
                   
                    <input type="text" name="reponse" id="reponse" onChange={formik.handleChange}

value={formik.values.reponse}/>
                  
                    <button className={"button"} id={"sg-position"} type="submit" value="Envoyer">Valider</button>
                </form>
                    {/* <button onClick={}>Next >Quest</button> */}
                
                </div>
            </div>
        </div>
    )
}

export default QuestOne;