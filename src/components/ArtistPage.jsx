import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectArtistByName } from "../reducers/artistSlice";
import { selectAllTrack } from "../reducers/tracksSlice";

import "../../public/css/artistPage.css";

const ArtistPage = () => {
  const { artistName } = useParams();

  const artist = useSelector((state) => selectArtistByName(state, artistName));
  console.log(artist);

  const artistTracks = useSelector((state) => {
    const allTrack = selectAllTrack(state);

    return allTrack.filter((track) => track.artist === artistName);
  });

  const renderedTracks = artistTracks.map((track) => (
    <div className="card" key={track.name}>
      <img src={track.cover} alt="cover-music" />
      <div className="detail">
        <p>{track.name}</p>
        <p>{track.duration}</p>
        <p> plays :{track.plays}</p>
        <p>likes :{track.likes}</p>
      </div>
    </div>
  ));

  return (
    <div className="artistPage-container">
      <div className="header-page">
        <img className="artist-img" src={artist.srcImage} alt="avatar" />
        <div>
          <p className="artist-name">{artist.name}</p>
          <p className="artist-follower">
            follower : <span>{artist.follower}</span>
          </p>
          <p className="artist-trackNumber">
            tracks : <span>{artistTracks.length}</span>
          </p>
        </div>
      </div>
      <div className="tracks-container">{renderedTracks}</div>
    </div>
  );
};

export default ArtistPage;
