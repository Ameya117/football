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
  const [currentLeague, setCurrentLeague] = useState(" ");
  const [leagueCode, setLeagueCode] = useState("PL");
  const [matchRange, setMatchRange] = useState({ start: 0, end: 10 })
  const [progress, setProgress] = useState(0);
  const [leagueID, setLeagueID] = useState(2002);


  const getMatches = async (league) => {
    try {
      setProgress(progress + 25);
      let response = await axios.get(`${apiURL}/competitions/${league}/matches`, {
        headers: {
          'X-Auth-Token': apiKey
        }
      });
      setProgress(progress + 50);
      const data = response.data;
      setMatches(data.matches.slice(matchRange.start, matchRange.end));
      setProgress(progress + 75);
      setCurrentLeague(data.competition.name);
      setLeagueCode(data.competition.code)
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

  // const handleOnClick = async (e) => {//DELTE LATER - REPLACED BY useEffect()
  //   // e.preventDefault();
  //   // console.log(league);
  //   console.log(currentLeague)
  //   getMatches(league);
  // }

  const handleCheckMatches = async (e) => {//DELETE LATER
    // e.preventDefault();
    console.log(matches);
  }

  const handleNext = (e) => {
    e.preventDefault();
    console.log("next")

    setMatchRange({ start: matchRange.start + 10, end: matchRange.end + 10 });
    getMatches(league);
  }
  const handlePrev = () => {
    console.log("prev");
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

      {matches ? <div className='sm:w-2/3 '>

        {/* <button type="button" className='border-4' onClick={handleCheckMatches}>Check matches array</button> */}
        <div className="league-name mt-10 grid place-content-center p-8">
          <div className='h-22 px-12 py-4 rounded-lg mb-2 mx-2 flex flex-col md:flex-row'>

            <div>
              <img className="h-28" src={leaguelogo} alt={`${league} logo`} />
            </div>
            <div className="my-auto mr-auto text-wrap grid  place-content-center">
              <h1 className="my-auto text-xl ">
                {currentLeague}
              </h1>
            </div>
          </div>

          <div>
            <ul className="flex border-b justify-around">
              <li className="-mb-px mr-1">
                <Link className={`inline-block hover:border-b-4 rounded-t py-2 px-4 font-semibold ${location.pathname === `${league}/matches` ? 'border-b-2 pointer-events-none' : ''}`} to={`/${league}/matches`}>Fixtures</Link>
              </li>
              <li className="mr-1">
                <Link className={`inline-block py-2 px-4 font-semibold ${location.pathname === `/${leagueCode}/table/${leagueID}` ? 'border-b-2 pointer-events-none' : ''}`} to={`/${leagueCode}/table/${leagueID}`} disabled>Table</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="bg-yellow-100 m-5 w-auto py-5">
          {matches.map((match) => {
            return <div className="mx-5  hover:m-3" key={match.id}>

              <Link to={`/matchinfo/${match.id}`} >
                <MatchScore match={match}></MatchScore>
              </Link>

            </div>
          })}
          <div className='flex justify-around'>
            <button disabled={matchRange.start === 0} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-0" type="button" onClick={handlePrev} >&larr; Previous</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-0" type="button" onClick={handleNext}>Next &rarr;</button>
          </div>
        </div>

      </div> : <h1>SELECT LEAGUE -OR- {<Spinner />}
      {/* <button type="button" className='border-4 h-20' onClick={handleOnClick}>LOAD MATCHES</button> */}
      </h1>}
    </>
  )
}

export default Matches
