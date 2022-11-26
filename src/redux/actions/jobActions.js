import * as actionTypes from "../constants/jobConstants";
import { savedJobs } from "../../data";

export const addToFavourite = (id) => (dispatch, getState) => {
  const job = savedJobs.filter((x) => x.id === id);

  dispatch({
    type: actionTypes.ADD_TO_FAVOURITE,
    payload: {
      id: job.id,
      title: job.title,
      desc: job.desc,
    },
  });

  localStorage.setItem("jobs", JSON.stringify(getState().jobs.jobs));
};

export const removeFromFavourite = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_FAVOURITE,
    payload: id,
  });

  localStorage.setItem("jobs", JSON.stringify(getState().jobs.jobs));
};
