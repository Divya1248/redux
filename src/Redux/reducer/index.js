import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";


// {} are optional 
let reducers = combineReducers({ CounterReducer});
export default reducers;