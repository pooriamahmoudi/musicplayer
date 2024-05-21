import { configureStore, current } from "@reduxjs/toolkit";

import artistReducer from "../reducers/artistSlice";
import tracksReducer from "../reducers/tracksSlice";
import isPlayingReducer from "../reducers/isPlayingSlice";
import currentTrackReducer from "../reducers/currentTrack";

export const store = configureStore({
  reducer: {
    artist: artistReducer,
    tracks: tracksReducer,
    isPlaying: isPlayingReducer,
    currentTrack: currentTrackReducer,
  },
});
