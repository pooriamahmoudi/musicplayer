// import { useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import "../../public/css/home.css";
import ArtistsList from "./ArtistsList";
import Banner from "./Banner";
import Player from "./Player";
import TracskList from "./TracskList";
import SearchBox from "./SearchBox";

const Home = () => {
  // const [searchValue, setSearchValue] = useState({ text: "" });
  // const [searchedArtists, setSearchedArtists] = useState([]);
  // const allArtists = useSelector((state) => state.artist);

  // const searchListRef = useRef();

  // const handleSearch = (event) => {
  //   setSearchValue({ ...searchValue, text: event.target.value });

  //   const filteredArtists = allArtists.filter((artist) => {
  //     return artist.name
  //       .toLowerCase()
  //       .includes(event.target.value.toLowerCase());
  //   });
  //   if (searchValue.text.length > 0) {
  //     setSearchedArtists(filteredArtists);
  //   } else {
  //     setSearchedArtists([]);
  //   }

  //   if (searchValue.text.length > 0) {
  //     searchListRef.current.style.display = "block";
  //   }
  // };

  // const renderedArtists = searchedArtists.map((artist) => (
  //   <Link to={`artists/${artist.name}`} key={artist.id} className="artist">
  //     <img src={artist.srcImage} alt="" />
  //     <div>
  //       <p>{artist.name}</p>
  //       <p className="follow">{artist.follower} follower</p>
  //     </div>
  //   </Link>
  // ));

  // if (searchValue.text.length === 0) {
  //   searchListRef.current.style.display = "none";
  // }

  return (
    <>
      <div className="header">
        <h2>Home</h2>
        {/* <div className="search-box">
          <input
            type="text"
            placeholder="search"
            value={searchValue.text}
            onChange={handleSearch}
          />
          <div ref={searchListRef} className="search-list">
            {renderedArtists}
          </div>
        </div> */}
        <SearchBox />
      </div>
      <div className="first-section">
        <Banner />
        <ArtistsList />
      </div>
      <div className="section2">
        <div>
          <TracskList />
        </div>
        <div>
          <Player />
        </div>
      </div>
    </>
  );
};

export default Home;
