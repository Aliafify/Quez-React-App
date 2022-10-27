import React, { useEffect, useState } from "react";
import axios from 'axios';
import Question from "./question";
import Loading from "./loading";
import Options from "./ansOptions";
import ProgressBar from "./progress";
import './word.css'
import Tries from "./tries";
import { useSelector } from "react-redux";

const Words = () => {
    const questions = useSelector(mapStateToProps);
    return (
        <> {!questions.length ? (<>
            <Loading />
        </>
        ) : (
            <div className="word">
                <div className="top">
                    <h1 className="title">Part Of Speech Test</h1>
                    {/* <Tries rank={rank} /> */}
                    <ProgressBar  />
                    <Question  />
                </div>
                <Options />
            </div>

        )}
        </>

    )
}
function mapStateToProps({QS}){
   return QS
}
export default Words;