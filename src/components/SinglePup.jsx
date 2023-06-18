import React from "react";
import { useNavigate } from "react-router-dom";

function SinglePup({ player }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="all-puppies">
        <div className="info">
          <h2 className="name">{player.name}</h2>
          <h2>{player.breed}</h2>
        </div>
        <img className="playerImg" src={player.imageUrl}></img>
        <button
          className="link"
          onClick={(event) => {
            event.preventDefault();
            navigate(`/players/${player.id}`);
          }}
        >
          Click for more details.
        </button>
      </div>
    </>
  );
}

export default SinglePup;