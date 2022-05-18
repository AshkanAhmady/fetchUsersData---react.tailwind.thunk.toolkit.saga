import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILUR,
  FETCH_USERS_SUCCESS,
} from "./usersType";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const userReducer = function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return { ...state, error: null, data: [], loading: true };
    }
    case FETCH_USERS_FAILUR: {
      return { ...state, error: action.payload, data: [], loading: false };
    }
    case FETCH_USERS_SUCCESS: {
      return { ...state, error: null, data: action.payload, loading: false };
    }
    default:
      return state;
  }
};

export default userReducer;
