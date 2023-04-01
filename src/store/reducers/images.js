import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  gallery: "hot",
  sort: "viral",
  window: "day",
  page: 1,
  showViral: true,
  showMature: true,
  albumPreviews: true,
  isLoading: false,
  error: null,
  modal: undefined,
};

const imgurSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    updateState: (state, action) => {
      state[action.payload.state] = action.payload.value;
    },
    fetchDataStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.data = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  updateState,
} = imgurSlice.actions;

export default imgurSlice.reducer;
