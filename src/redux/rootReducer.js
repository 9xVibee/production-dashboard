// reducers/index.js
import { combineReducers } from "redux";
import LightDarkModeReducer from "./light-dark/lightDarkReducer";
import FakeApiReducer from "./fake-api-data/FakeApiDataReducer";

const rootReducer = combineReducers({
  lightdarkmode: LightDarkModeReducer,
  fakeapidata: FakeApiReducer,
});

export default rootReducer;
