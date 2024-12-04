import { combineReducers } from "redux";
import lightDarkModeReducer from "./light-dark/lightDarkReducer";
import fakeApiDataReducer from "./fake-api-data/FakeApiDataReducer";

const rootReducer = combineReducers({
  lightDarkMode: lightDarkModeReducer,
  fakeApiData: fakeApiDataReducer,
});

export default rootReducer;
