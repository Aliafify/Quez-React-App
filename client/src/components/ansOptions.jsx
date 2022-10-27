import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  Correct_Answers,
  getRank,
  New_Try,
  nextQS,
} from "../actions/generalActions";
import { inetialize_QS } from "../actions/questions";
import "./ansOptions.css";
import Buttons from "./buttons";

const Options = () => {
  const options = ["noun", "verb", "adverb", "adjective"]; // Options of answer...

  const { correctAnswer, order, QSNumber, correct } =
    useSelector(mapStateToProps);
  const [choice, setChoice] = useState(null);
  const [disable, setDisable] = useState(false);
  const Navigat = useNavigate();
  const dispatch = useDispatch();

  //                   enable submition after choose answer
  const onChecked = (e) => {
    setChoice(e.value);

    const options = document.querySelectorAll(".options");
    options.forEach((o) => o.classList.remove("checked"));
    e.classList.add("checked");
  };
  //                     continue to next question
  const next = () => {
    dispatch(nextQS()); //next Quesion
    setDisable(false);
    document.querySelector(`.${choice}`).innerHTML = "";
    const options = document.querySelectorAll(".options");
    options.forEach((o) => o.classList.remove("checked"));
    if (order + 1 < QSNumber) {
      setChoice(null);
    } else {
      const score = (correct / 10) * 100;
      dispatch(getRank(score)); // get rank
      dispatch(New_Try()); //new try
      dispatch(inetialize_QS()); // refetch new random Qestions
      Navigat("/rank");
    }
  };
  //                      submit question answer
  const submitAnswer = () => {
    if (correctAnswer === choice) {
      // if correct answer
      dispatch(Correct_Answers());
      document.querySelector(`.${choice}`).innerHTML = "true";
    }
    if (correctAnswer !== choice) {
      // if rong answer
      document.querySelector(`.${choice}`).innerHTML = "false";
    }
    setDisable(true);
  };
  return (
    <div className="bottom">
      <ul className="ans">
        {options.map((o) => (
          <li key={o}>
            <input
              type="button"
              id={o}
              className="options"
              value={o}
              onClick={(event) => onChecked(event.target)}
              disabled={disable}
            />
            <br /> <span className={o}></span>
          </li>
        ))}
      </ul>

      <Buttons
        submitAnswer={submitAnswer}
        next={next}
        disable={choice ? false : true}
      />
    </div>
  );
};
// get correct answer
function mapStateToProps({ QS, general }) {
  const correctAnswer = QS[general.order].pos;
  const order = general.order;
  const QSNumber = QS.length;
  const correct = general.correct;
  return { correctAnswer, order, QSNumber, correct };
}

export default Options;
