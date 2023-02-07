import React from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetails.css';
import axios from 'axios';

function CharacterDetails() {
  // i need the id from the url
  const { id } = useParams();
  // create state for character data
  const [character, setCharacter] = React.useState();

  // https://rickandmortyapi.com/api/character/2

  React.useEffect(() => {
    // call api to get info on this character
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        console.log(res.data);
        setCharacter(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert('no matching characters');
        } else {
          console.log(err);
        }
      });
  }, [id]);

  return (
    <div className="details-container">
      <img src={character?.image} alt={character?.name} />
      <div className="char-info">
        <h3>{character?.name}</h3>
        <ul>
          <li>{character?.gender}</li>
          <li>{character?.species}</li>
          <li>{character?.status}</li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetails;
