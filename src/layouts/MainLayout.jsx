import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
// import { useRef, useEffect } from "react";
// import { useSelector } from "react-redux";

const MainLayout = () => {
  // const tracks = useSelector((state) => state.tracks);
  // let isPlaying = useSelector((state) => state.isPlaying);
  // let chosenTrack = useSelector((state) => state.currentTrack);
  // let indexTrack = Number(tracks.indexOf(chosenTrack));
  // const audioTagRef = useRef();

  // {
  //   Object.keys(chosenTrack).length > 0 ? indexTrack : (indexTrack = 0);
  // }
  // let currentTrack = tracks[indexTrack];

  // useEffect(() => {
  //   const loadTrack = () => {
  //     const track = currentTrack;
  //     audioTagRef.current.src = track.audioSrc;
  //   };
  //   loadTrack();
  // }, [currentTrack]);

  return (
    <div className="app-container">
      {/* <audio ref={audioTagRef} src={currentTrack.audioSrc}></audio> */}
      <SideBar className="sidebar" />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
