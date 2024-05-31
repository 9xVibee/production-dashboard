import {
  SET_DATE_RANGE,
  SetCount,
  SetData,
  SetDate,
  SetLoading,
} from "./fakeApiDataTypes";

const initialState = {
  data: [],
  loading: true,
  count: null,
  startDate: null,
  endDate: null,
};

const FakeApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetData: {
      return {
        ...state,
        data: [...action.data],
      };
    }

    case SetDate: {
      return {
        ...state,
        date: action.date,
      };
    }

    case SetLoading: {
      return {
        ...state,
        loading: action.loading,
      };
    }

    case SetCount: {
      return {
        ...state,
        count: action.count,
      };
    }

    case SET_DATE_RANGE: {
      return { ...state, startDate: action.start, endDate: action.end };
    }
    default:
      return state;
  }
};

export default FakeApiReducer;
