import { combineReducers } from "redux";

import { QS } from "./questions";
import { general } from "./general";
export default combineReducers({
   QS,
   general,
});