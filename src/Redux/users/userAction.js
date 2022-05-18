import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILUR,
  FETCH_USERS_SUCCESS,
} from "./usersType";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersFailur = (error) => {
  return {
    type: FETCH_USERS_FAILUR,
    payload: error,
  };
};

const fetchUsersSuccess = (name) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: name,
  };
};

// we use this function in component that need to fetch data
export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => dispatch(fetchUsersSuccess(data)))
      .catch((error) => dispatch(fetchUsersFailur(error.message)));
  };
};
