/* eslint-disable no-unused-vars */

import { DARK_MODE, LIGHT_MODE } from "./lightDarkTypes";

const initialState = {
  lightDARK_MODE: "light",
};

const LightDARK_MODEReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIGHT_MODE: {
      return { lightDARK_MODE: "light" };
    }

    case DARK_MODE: {
      return { lightDARK_MODE: "dark" };
    }

    default:
      return state;
  }
};

export default LightDARK_MODEReducer;
