import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit";

import eminem from "../assets/eminem.png";
import zhu from "../assets/zhu.png";
import pawsa from "../assets/pawsa.png";
import mike from "../assets/mike.png";
import travis from "../assets/travis.png";
import nf from "../assets/nf.png";

let artists = [
  {
    name: "Pawsa",
    follower: 30021,
    tracks: 0,
    srcImage: pawsa,
    id: nanoid(),
  },
  {
    name: "Mike Morrisey",
    follower: 3242,
    tracks: 0,
    srcImage: mike,
    id: nanoid(),
  },
  {
    name: "Zhu",
    follower: 12123,
    tracks: 0,
    srcImage: zhu,
    id: nanoid(),
  },
  {
    name: "Nf",
    follower: 42133,
    tracks: 0,
    srcImage: nf,
    id: nanoid(),
  },
  {
    name: "Eminem",
    follower: 98689,
    tracks: 0,
    srcImage: eminem,
    id: nanoid(),
  },
  {
    name: "Travis Scatt",
    follower: 12345,
    tracks: 0,
    srcImage: travis,
    id: nanoid(),
  },
  {
    name: "Soulchef",
    follower: 32451,
    trakcs: 0,
    srcImage: eminem,
    id: nanoid(),
  },
];

const artistSlice = createSlice({
  name: "artist",
  initialState: artists,
  reducers: {},
});

export default artistSlice.reducer;

export const selectArtistByName = (state, artistName) =>
  state.artist.find((artist) => artist.name === artistName);
