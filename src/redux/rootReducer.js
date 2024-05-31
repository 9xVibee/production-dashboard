// reducers/index.js
import { combineReducers } from "redux";
import LightDARK_MODEReducer from "./light-dark/lightDarkReducer";
import FakeApiReducer from "./fake-api-data/FakeApiDataReducer";

const rootReducer = combineReducers({
  lightDARK_MODE: LightDARK_MODEReducer,
  fakeapidata: FakeApiReducer,
});

export default rootReducer;
