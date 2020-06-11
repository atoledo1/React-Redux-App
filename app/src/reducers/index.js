import { combineReducers } from "redux";
import { catImageReducer } from "./catReducer";

export default combineReducers({
  image: catImageReducer,
});
