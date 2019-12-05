import axios from "axios";

import { GET_LEADS, DELETE_LEADS } from "./types";

// GET LEADS
export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// DELETE LEAD

export const deleteLeads = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_LEADS,
        payload: id
      });
    })
    .catch(err => {
      console.log(err);
    });
};
