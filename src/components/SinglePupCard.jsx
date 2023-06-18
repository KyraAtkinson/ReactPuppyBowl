import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SinglePlayerCard({ puppy }) {
  const [players, setPlayers] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT/players/${id}`
        );
        const translatedData = await response.json();
        setPlayers(translatedData.data.player);
        console.log(players);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllPlayers();
  }, []);

  return (
    <>
      {players && players.id ? (
        <div className="player-card">
          <h4 className="name">{players.name}</h4>
          <h2>ID: {players.id}</h2>
           <h2>Status: {players.status}</h2>
          <h2>Breed: {players.breed}</h2>
         
          <div>
            <img className="playImg" src={players.imageUrl}></img>
          </div>
          <div>
            <button
              className="link"
              onClick={(event) => {
                event.preventDefault();
                navigate(`/players/`);
              }}
            >
              Back 
            </button>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}

export default SinglePlayerCard;