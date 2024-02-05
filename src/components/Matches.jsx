import React, { useState, useEffect } from 'react'
import axios from "axios"
import LoadingBar from 'react-top-loading-bar'
import Spinner from "./Loading"
import { Link, useLocation } from "react-router-dom";
import MatchScore from './MatchScore';
// import matchContext from '../context/match/matchContext'

const Matches = (props) => {
  let { league, leaguelogo } = props;
  let location = useLocation();
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiURL = import.meta.env.VITE_API_URL;
  const [matches, setMatches] = useState(null);
  const [matchRange, setMatchRange] = useState({ start: 0, end: 10 })
  const [progress, setProgress] = useState(0);
  const [leagueID, setLeagueID] = useState(2002);

  const getMatches = async (league) => {
    try {
      setProgress(progress + 25);
      const response = await axios.get(`${apiURL}/competitions/${league}/matches`, {
        headers: {
          'X-Auth-Token': apiKey
        }
      });
      setProgress(progress + 50);
      const data = response.data;
      setMatches(data.matches.slice(matchRange.start, matchRange.end));
      setProgress(progress + 75);
      setLeagueID(data.competition.id)
      setProgress(100);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMatches(league);
    // eslint-disable-next-line
  }, [])

  const handleNext = (e) => {
    // e.preventDefault();
    setMatchRange({ start: matchRange.start + 10, end: matchRange.end + 10 });
    getMatches(league);
  }
  const handlePrev = () => {
    setMatchRange({ start: matchRange.start - 10, end: matchRange.end - 10 });
    getMatches(league);
  }

  return (
    <>
      <LoadingBar
        color='#7bff00'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <br />

      {matches ? 
        <div className="-blue-800 m-5 w-auto py-5">
          {matches.map((match) => {
            return <div className="mx-4" key={match.id}>

              {/* <Link to={`/matchinfo/${match.id}`} > */}
                <MatchScore match={match}></MatchScore>
              {/* </Link> */}

            </div>
          })}
          <div className='flex justify-around'>
            <button disabled={matchRange.start === 0} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-0" type="button" onClick={handlePrev} >&larr; Previous</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-0" type="button" onClick={handleNext}>Next &rarr;</button>
          </div>
        </div>

     : <div className='m-auto'>
      {<Spinner />}
      </div>}
    </>
  )
}
export default Matches