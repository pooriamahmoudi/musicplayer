import { createSlice } from "@reduxjs/toolkit";

import akimboCover from "../assets/cover/Akimbo.png";
import roomCover from "../assets/cover/dog.png";
import leaveCover from "../assets/cover/leaveMe.png";
import partyCover from "../assets/cover/party.png";
import sunCover from "../assets/cover/sun.png";
import travisCover from "../assets/cover/travis.png";
import writeCover from "../assets/cover/write.png";
import zhuCover from "../assets/cover/zhu.png";
import eminem from "../assets/eminem.png";

import akmbioMusic from "../assets/music/akimbo.mp3";
import ghostinmybedMusic from "../assets/music/ghost in my bed.mp3";
import hateMusic from "../assets/music/hate.mp3";
import NigaraFallsMusic from "../assets/music/Niagara Falls.mp3";
import roomMusic from "../assets/music/room.mp3";
import sunMusic from "../assets/music/sun.mp3";
import whippinMusic from "../assets/music/whippin.mp3";
import beautifulMusic from "../assets/music/beautiful.mp3";
import gutilyLoveMusic from "../assets/music/guitly love.mp3";
import monsterMusic from "../assets/music/monster.mp3";
import partyMusic from "../assets/music/party.mp3";
import searchMusic from "../assets/music/search.mp3";
import whenMusic from "../assets/music/when.mp3";
import writeThisDownMusic from "../assets/music/write this down.mp3";

export let tracks = [
  {
    audioSrc: ghostinmybedMusic,
    cover: zhuCover,
    artist: "Zhu",
    name: "Ghost In My Bed",
    duration: "04:59",
    plays: 21012,
    likes: 4368,
  },
  {
    audioSrc: gutilyLoveMusic,
    cover: zhuCover,
    artist: "Zhu",
    name: "Guitly Love",
    duration: "04:34",
    plays: 42302,
    likes: 4368,
  },
  {
    audioSrc: NigaraFallsMusic,
    cover: travisCover,
    artist: "Travis Scatt",
    name: "Niagara Falls",
    duration: "03:10",
    plays: 75124,
    likes: 3214,
  },
  {
    audioSrc: writeThisDownMusic,
    cover: writeCover,
    artist: "Soulchef",
    name: "Write this Down",
    duration: "03:09",
    plays: 54302,
    likes: 568,
  },
  {
    audioSrc: partyMusic,
    cover: partyCover,
    artist: "Pawsa",
    name: "Party",
    duration: "03:28",
    plays: 98740,
    likes: 48,
  },
  {
    audioSrc: roomMusic,
    cover: roomCover,
    artist: "Pawsa",
    name: "Room Services",
    duration: "04:44",
    plays: 1040,
    likes: 48,
  },
  {
    audioSrc: whippinMusic,
    cover: roomCover,
    artist: "Pawsa",
    name: "Whippin",
    duration: "03:28",
    plays: 1110,
    likes: 128,
  },
  {
    audioSrc: akmbioMusic,
    cover: akimboCover,
    artist: "Mike Morrisey",
    name: "Akimbo Again",
    duration: "03:31",
    plays: 10120,
    likes: 48,
  },
  {
    audioSrc: sunMusic,
    cover: sunCover,
    artist: "Mike Morrisey",
    name: "Sun Can't Compare",
    duration: "06:30",
    plays: 1040,
    likes: 123,
  },
  {
    audioSrc: beautifulMusic,
    cover: eminem,
    artist: "Eminem",
    name: "beautiful",
    duration: "06:32",
    plays: 1040,
    likes: 541,
  },
  {
    audioSrc: monsterMusic,
    cover: eminem,
    artist: "Eminem",
    name: "monster",
    duration: "04:10",
    plays: 4120,
    likes: 518,
  },
  {
    audioSrc: whenMusic,
    cover: leaveCover,
    artist: "Nf",
    name: "when I Grow Up",
    duration: "03:16",
    plays: 22341,
    likes: 321,
  },
  {
    audioSrc: hateMusic,
    cover: leaveCover,
    artist: "Nf",
    name: "Hate My Self",
    duration: "04:20",
    plays: 10402,
    likes: 481,
  },
  {
    audioSrc: searchMusic,
    cover: leaveCover,
    artist: "Nf",
    name: "The Search",
    duration: "04:08",
    plays: 10233,
    likes: 418,
  },
];

const tracksSlice = createSlice({
  name: "tracks",
  initialState: tracks,
  reducers: {},
});

export default tracksSlice.reducer;

export const selectAllTrack = (state) => state.tracks;

export const selectTrackByName = (state, trackName) => {
  state.tracks.find((track) => track.name === trackName);
};
