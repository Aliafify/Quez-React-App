import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./rank.css"
const Rank = () => {
    const Navigat = useNavigate();
    // Try Test again callback
    const tryAgain = () => {
        Navigat('/');
    }
   const rank = useSelector(mapStateToProps)
    return (

        <div className="word rank">
                <h3  className="rank-text"> Rank: {rank} %</h3>
            <input className="btn" type="button" value="try again" onClick={() => { tryAgain() }} />
        </div>
    )
}
function mapStateToProps({general}){
     
    return general.rank
    
}
export default Rank;