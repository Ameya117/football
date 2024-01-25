import React, { useEffect,useState } from 'react'
import Leagues from '../components/Leagues'
import Matches from '../components/Matches'
import { Link, useLocation } from "react-router-dom";
import LeagueStandings from './LeagueStandings';
import axios from 'axios';


const Home = (props) => {
  let { league, leaguelogo } = props;
  let location = useLocation();
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiURL = import.meta.env.VITE_API_URL;
  const [leagueID, setLeagueID] = useState();

  const getLeagueId = async (lg)=>{
    try {
      let response = await axios.get(`${apiURL}/competitions/${league}`, {
        headers: {
          'X-Auth-Token': apiKey
        }
      });
      const data = response.data;
      setLeagueID(data.id);
     
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getLeagueId(league);
    //es
  })

  let element;
  if (location.pathname === `/${league}/table/${leagueID}`) {
    // console.log(location)
    element = <LeagueStandings league={league} leaguelogo={leaguelogo} key={league} />
  } else {
    // console.log(location)
    element = <Matches league={league} leaguelogo={leaguelogo} key={league} />
  }


  return (
    <>
      <div className="flex" key={league}>
        <Leagues />
        
        {element}
      </div>
    </>
  )
}

export default Home
