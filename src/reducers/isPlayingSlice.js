import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

//playingtrackState

const isPlayingSlice = createSlice({
  name: "isPlaying",
  initialState: false,
  reducers: {
    togglePlay: (state) => !state,
    playIsTrue: (state) => (state = true),
    playIsFalse: (state) => (state = false),
  },
});

export const { togglePlay, playIsFalse, playIsTrue } = isPlayingSlice.actions;

export default isPlayingSlice.reducer;
