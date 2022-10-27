import React from "react";
const Tries = ({ rank }) => {
    return (<select className="tries" >{rank.length !== 0 ? rank.map((r, index) => <option key={index}>try({index + 1}):{r} % </option>
    ) : (<option>try(1): </option>)}
    </select>)
}
export default Tries;