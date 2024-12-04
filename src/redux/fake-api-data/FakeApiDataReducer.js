import {
  SET_DATE_RANGE,
  SET_COUNT,
  SET_DATA,
  SET_DATE,
  SET_LOADING,
} from "./fakeApiDataTypes";

const initialState = {
  data: [],
  loading: true,
  isCountAboveOrBelow: null,
  startDate: null,
  endDate: null,
};

const fakeApiDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        data: [...action.data],
      };
    }

    case SET_DATE: {
      return {
        ...state,
        date: action.date,
      };
    }

    case SET_LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }

    case SET_COUNT: {
      return {
        ...state,
        isCountAboveOrBelow: action.count,
      };
    }

    case SET_DATE_RANGE: {
      return { ...state, startDate: action.start, endDate: action.end };
    }
    default:
      return state;
  }
};

export default fakeApiDataReducer;
