import React, { useState } from "react";

function Buttons({ submitAnswer, next ,disable}) {
  const [show, setShow] = useState(false);

  return (
    <div className="bottom-btn">
      {!show ? (
        <input
          className="btn"
          type="button"
          value="Submit"
          onClick={() => {
            submitAnswer();
            setShow(!show);
          }}
          disabled={disable}
        />
      ) : (
        <input
          className="btn"
          type="button"
          value="Next"
          onClick={() => {
            next();
            setShow(!show);
          }}
        />
      )}
    </div>
  );
}

export default Buttons;
