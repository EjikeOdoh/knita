import * as actionTypes from "../constants/jobConstants";

export const jobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVOURITE:
      const item = action.payload;

      const existItem = state.jobs.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          jobs: state.jobs.map((x) => (x.id === existItem.id ? item : x)),
        };
      } else {
        return {
          ...state,
          jobs: [...state.jobs, item],
        };
      }

    case actionTypes.REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        jobs: state.jobs.filter((x) => x.id !== action.payload),
      };
  }
};
