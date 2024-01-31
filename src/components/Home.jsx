import React, { useEffect, useState } from 'react'
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
  const [currentLeague, setCurrentLeague] = useState("");
  const [season, setSeason] = useState({start:"",end:""});

  const getLeagueId = async (lg) => {
    try {
      const response = await axios.get(`${apiURL}/competitions/${lg}`, {
        headers: {
          'X-Auth-Token': apiKey
        }
      });
      const data = response.data;
      setLeagueID(data.id);
      setCurrentLeague(data.name);
      setSeason({start: data.currentSeason.startDate.slice(0, 4),end:data.currentSeason.endDate.slice(0, 4)});

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLeagueId(league);
    //eslint-disable-next-line  
  },[])

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
      <div className="flex flex-row">
        <div className='w-1/6 md:2/6 mt-36 md:mt-48 text-white'>
          <Leagues />
        </div>
        <div className="flex flex-col w-5/6 md:4/6">

          <div className='h-22 px-12 py-4 rounded-lg mb-2 mx-2 flex flex-col sm:flex-row text-white'>
            <div className='grid place-content-center'>
              <img className="grid place-content-center h-16 sm:h-28 md:h-36" src={leaguelogo} alt={`${league} logo`} />
            </div>
            <div className="my-auto  grid place-content-center  ">
              <h1 className="my-auto ml-0 sm:ml-2 text-2xl sm:text-3xl md:text-5xl">
                {currentLeague}
              </h1>
              <h2 className='grid place-content-center'>
                {season.start}/{season.end}
              </h2>
            </div>
          </div>
          <div>
            <ul className="flex border-b justify-around text-white">
              <li className="mb-px mr-1">
                <Link className={`inline-block md:text-lg lg:text-xl rounded-t py-2 px-4 font-bold ${location.pathname === `/${league}/matches` ? 'border-b-4 pointer-events-none' : ''}`} to={`/${league}/matches`}>Fixtures</Link>
              </li>
              <li className="mr-1">
                <Link className={`inline-block md:text-lg lg:text-xl py-2 px-4 font-bold ${location.pathname === `/${league}/table/${leagueID}` ? 'border-b-4 pointer-events-none' : ''}`} to={`/${league}/table/${leagueID}`} disabled>Table</Link>
              </li>

            </ul>

          </div>

          <div className="element">
            {element}
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
