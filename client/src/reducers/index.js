import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import reviewReducer from "./reviewReducer";

export default combineReducers({
  form: formReducer,
  reviews: reviewReducer,
});
