import React from "react";
import { useSelector } from "react-redux";
import "./question.css"
const Question = () => {
    const question = useSelector(mapStateToProps)
    return (
        <>
            <div className="q-cont">
                <p className="q-text">
                    Choose type of this Word:
                    <hr/>
                    <span>

                    <b> {question}</b>
                    </span>
                    <hr/>
                </p>
            </div>  
        </>
    )
}
function mapStateToProps({QS,general}){
      
     return QS[general.order].word

    //return general.order
}
export default Question;