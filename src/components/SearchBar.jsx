import { useState, useEffect } from "react";
import SinglePup from "./SinglePup";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [players, setPlayers] = useState([]);
  let filteredPlayers = players.filter((result) => {
    let lowercasedName = result.name.toLowerCase();
    let lowercasedQuery = searchQuery.toLowerCase();

    if (lowercasedName.includes(lowercasedQuery)) {
      return result;
    }
  });
  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT/players"
        );
        const translatedData = await response.json();
        setPlayers(translatedData.data.players);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllPlayers();
  });
  return (
    <div id="container">
      <form>
        <label className="lab" htmlFor="search-query">
          Search Players:{" "}
        </label>
        <input
          name="search-query"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(search) => {
            setSearchQuery(search.target.value);
          }}
        ></input>
      </form>
      <div>
        {filteredPlayers.length ? (
          filteredPlayers.map((result, idx) => {
            return <SinglePup key={idx} player={result} />;
          })
        ) : (
          <p>Puppy doesn't exist</p>
        )}
      </div>
    </div>
  );
}

export default Search;