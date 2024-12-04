import { DARK_MODE, LIGHT_MODE } from "./lightDarkTypes";

const initialState = {
  lightDarkModeValue: "light",
};

const lightDarkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIGHT_MODE: {
      return { lightDarkModeValue: "light" };
    }

    case DARK_MODE: {
      return { lightDarkModeValue: "dark" };
    }

    default:
      return state;
  }
};

export default lightDarkModeReducer;
