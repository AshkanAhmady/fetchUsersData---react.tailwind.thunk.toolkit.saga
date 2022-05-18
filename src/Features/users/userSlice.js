import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  //   if we have id => we put it in first input of this function
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    //   to have a dinamic property, we use backet
    [fetchUsers.pending]: (state, action) => {
      return { ...state, error: null, data: [], loading: true };
    },
    [fetchUsers.fulfilled]: (state, action) => {
      return { ...state, error: null, data: action.payload, loading: false };
    },
    [fetchUsers.rejected]: (state, action) => {
      return {
        ...state,
        error: action.error.message,
        data: [],
        loading: false,
      };
    },
  },
});

// export {} = userSlice.actions;
export default userSlice.reducer;
