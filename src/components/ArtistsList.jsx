import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../public/css/artistsList.css";

const ArtistsList = () => {
  const artists = useSelector((state) => state.artist);

  const artist = artists.map((artist, index) => (
    <Link to={`artists/${artist.name}`} key={index} className="artist">
      <img src={artist.srcImage} alt="" />
      <div>
        <p>{artist.name}</p>
        <p className="follow">{artist.follower} follower</p>
      </div>
    </Link>
  ));

  return (
    <div className="artists-container">
      <div className="header">
        <h4>Artist</h4>
      </div>
      <div className="list">{artist}</div>
    </div>
  );
};

export default ArtistsList;
