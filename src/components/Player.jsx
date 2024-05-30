import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "../store/index";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaShuffle, FaRepeat } from "react-icons/fa6";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import { togglePlay } from "../reducers/isPlayingSlice";
import "../../public/css/player.css";

import { getTrack, setTrack } from "../reducers/currentTrack";

const Player = () => {
  const tracks = useSelector((state) => state.tracks);
  let isPlaying = useSelector((state) => state.isPlaying);
  let currentTrack = useSelector((state) => state.currentTrack);
  const indexTrack = tracks.indexOf(currentTrack);
  const [originalDuration, setOriginalDuration] = useState(0);
  const [duration, setDuration] = useState("00:00");
  const [currentTime, setCurrentTime] = useState(0);
  const [showTime, setShowTime] = useState("00:00");

  const audioTagRef = useRef();
  const lineContainerRef = useRef();
  const lineElementRef = useRef();
  const repeatButton = useRef();
  const randomButton = useRef();

  const goTrackIndex = (index) => {
    const nextTrack = tracks[index];

    store.dispatch(getTrack(nextTrack));
  };

  const handleLoadMetaData = (event) => {
    const allSeconds = Math.floor(event.target.duration);
    setOriginalDuration(allSeconds);
    const minutes = Math.floor(allSeconds / 60);
    const seconds = allSeconds - minutes * 60;

    const m = `${minutes}`.padStart(2, "0");
    const s = `${seconds}`.padStart(2, "0");

    setDuration(`${m}:${s}`);
  };

  const handleClickProgress = (event) => {
    const { width } = event.currentTarget.getBoundingClientRect();
    const offsetX = event.nativeEvent.offsetX;
    const progressPercent = offsetX / width;
    const time = Math.floor(progressPercent * originalDuration);
    setCurrentTime(time);
    audioTagRef.current.currentTime = time;
  };

  const handlePlaying = (event) => {
    const time = event.target.currentTime;
    const roundedTime = Math.round(time);
    const minutes = Math.floor(roundedTime / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (roundedTime % 60).toString().padStart(2, "0");

    setShowTime(`${minutes}:${seconds}`);
    setCurrentTime(time);
  };

  // const nextTrackIndex =
  // indexTrack === tracks.length - 1 ? 0 : indexTrack + 1;

  const handleEndedMusic = () => {
    if (repeatButton.current.classList.contains("active")) {
      const index = indexTrack;
      goTrackIndex(index);

      audioTagRef.current.play();
    } else if (randomButton.current.classList.contains("active")) {
      const index = Math.floor(Math.random() * tracks.length);

      goTrackIndex(index);
    } else {
      const index = indexTrack === tracks.length - 1 ? 0 : indexTrack + 1;

      goTrackIndex(index);

      audioTagRef.current.play();
    }
  };

  useEffect(() => {
    const loadTrack = () => {
      audioTagRef.current.src = currentTrack.audioSrc;
    };
    loadTrack();

    if (isPlaying) {
      audioTagRef.current.play();
    }
  }, [currentTrack]);

  return (
    <div className="player-container">
      <img
        src={currentTrack.cover}
        alt="cover"
        className={`coverImg ${isPlaying ? "played" : ""}`}
      />
      <h5>{currentTrack.artist}</h5>
      <h3>{currentTrack.name}</h3>

      <div
        ref={lineContainerRef}
        className="line-container"
        onClick={handleClickProgress}
      >
        <div
          ref={lineElementRef}
          className="line"
          style={{
            width: `${(currentTime / originalDuration) * 100}%`,
          }}
        ></div>
      </div>
      <div className="timing">
        <span>{showTime}</span>
        <span>{duration}</span>
      </div>
      <audio
        onEnded={handleEndedMusic}
        onTimeUpdate={handlePlaying}
        onLoadedMetadata={handleLoadMetaData}
        ref={audioTagRef}
        id="audioTag"
        src={currentTrack.audioSrc}
      ></audio>
      <div className="actions">
        <div ref={randomButton}>
          <FaShuffle
            className="button"
            onClick={() => {
              randomButton.current.classList.toggle("active");
              repeatButton.current.classList.remove("active");
            }}
          />
        </div>
        <div>
          <TbPlayerTrackPrev
            className="button"
            onClick={() => {
              if (randomButton.current.classList.contains("active")) {
                const index = Math.floor(Math.random() * tracks.length);

                goTrackIndex(index);
              } else {
                const prevTrackIndex =
                  indexTrack === 0 ? tracks.length - 1 : indexTrack - 1;
                goTrackIndex(prevTrackIndex);
              }
            }}
          />
        </div>
        {isPlaying ? (
          <div>
            <FaPause
              className="button"
              onClick={() => {
                store.dispatch(togglePlay());
                audioTagRef.current.pause();
              }}
            />
          </div>
        ) : (
          <div>
            <FaPlay
              className="button"
              onClick={() => {
                store.dispatch(togglePlay());
                audioTagRef.current.play();
              }}
            />
          </div>
        )}

        <div>
          <TbPlayerTrackNext
            className="button"
            onClick={() => {
              if (randomButton.current.classList.contains("active")) {
                const index = Math.floor(Math.random() * tracks.length);

                goTrackIndex(index);
              } else {
                const nextTrackIndex =
                  indexTrack === tracks.length - 1 ? 0 : indexTrack + 1;

                goTrackIndex(nextTrackIndex);
              }
            }}
          />
        </div>
        <div ref={repeatButton}>
          <FaRepeat
            className="button"
            onClick={() => {
              repeatButton.current.classList.toggle("active");
              randomButton.current.classList.remove("active");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
