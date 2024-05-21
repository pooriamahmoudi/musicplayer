import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../../public/css/searchBox.css";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState({ text: "" });
  const [searchedArtists, setSearchedArtists] = useState([]);
  const allArtists = useSelector((state) => state.artist);

  const searchListRef = useRef();

  const handleSearch = (event) => {
    setSearchValue({ ...searchValue, text: event.target.value });

    const filteredArtists = allArtists.filter((artist) => {
      return artist.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    if (searchValue.text.length > 0) {
      setSearchedArtists(filteredArtists);
    } else {
      setSearchedArtists([]);
    }
  };

  useEffect(() => {
    if (searchValue.text.length > 0) {
      searchListRef.current.style.display = "block";
    }
    if (searchValue.text.length === 0) {
      searchListRef.current.style.display = "none";
    }
  }, [searchValue.text]);

  const renderedArtists = searchedArtists.map((artist) => (
    <Link to={`artists/${artist.name}`} key={artist.id} className="artist">
      <img src={artist.srcImage} alt="" />
      <div>
        <p>{artist.name}</p>
        <p className="follow">{artist.follower} follower</p>
      </div>
    </Link>
  ));

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="search artist"
        value={searchValue.text}
        onChange={handleSearch}
      />
      <div ref={searchListRef} className="search-list">
        {renderedArtists}
      </div>
    </div>
  );
};

export default SearchBox;
