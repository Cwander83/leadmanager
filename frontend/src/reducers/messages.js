import { CREATE_MESSAGE } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return (state = state.payload);

    default:
      return state;
  }
}
