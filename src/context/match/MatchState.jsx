import React, { useState } from 'react'
import MatchContext from './matchContext'
import Matches from '../../components/Matches';
import App from '../../App';

const MatchState = (props) => {

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiURL = "https://api.football-data.org/v4";
  const [matches, setMatches] = useState([]);

  const getMatches = async (league) => {
    try {
      const response = await axios.get(`${apiURL}/competitions/${league}/matches`, {
        headers: {
          'X-Auth-Token': apiKey
        }
      });
      setMatches(response.data.matches);
      console.log(response.data);


    } catch (error) {
      console.error(error);
    }
  }

  return (
    <MatchContext.Provider value={{ matches, getMatches }} >
      {props.children}
      <App />
      <Matches/>
    </MatchContext.Provider>
  )
}

export default MatchState;

