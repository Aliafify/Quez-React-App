import React from "react";
import { useSelector } from "react-redux";
import "./progress.css";

const ProgressBar = () => {
  const order = useSelector(mapStateToProps);
  const progress = (or) => {
    const count = or;
    const ratio = count / 10;
    return ratio * 100;
  };
  return (
    <div className="container">
      <h1> Progress</h1>
      <div className="progressbar-container">
        <div
          className="progressbar-complete"
          style={{ width: `${progress(order)}%` }}
        >
          <div className="progressbar-liquid"></div>
        </div>
        <span className="progress">{progress(order)}%</span>
      </div>
    </div>
  );
};
function mapStateToProps({ general }) {
  return general.order + 1;
}

export default ProgressBar;
