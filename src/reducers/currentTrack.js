import { createSlice } from "@reduxjs/toolkit";
import { tracks } from "./tracksSlice";

let empty = {};

const currenttrack = createSlice({
  name: "currentTrack",
  initialState: tracks[0],
  reducers: {
    getTrack: (state, action) => {
      return action.payload;
    },
  },
});

export const { getTrack, setTrack } = currenttrack.actions;

export default currenttrack.reducer;
