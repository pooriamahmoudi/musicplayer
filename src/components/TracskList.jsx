import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../store";
import { getTrack } from "../reducers/currentTrack";

import "../../public/css/trackList.css";

const TracskList = () => {
  const tracks = useSelector((state) => state.tracks);
  const trackElement = useRef();

  const list = tracks.map((track, index) => (
    <Link
      ref={trackElement}
      key={track.name}
      className="track"
      onClick={() => {
        store.dispatch(getTrack(track));
      }}
    >
      <img src={track.cover} alt="cover Music" />
      <p className="name">{track.name}</p>
      <p className="artist">{track.artist}</p>
      <p className="plays">
        <span>{track.plays}</span> played
      </p>
    </Link>
  ));

  return (
    <div className="list-container">
      <div className="header">
        <h3>Tracks</h3>
      </div>
      <div className="list">{list}</div>
    </div>
  );
};

export default TracskList;
