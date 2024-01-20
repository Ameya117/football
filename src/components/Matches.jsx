import React, { useEffect, useContext, useState } from 'react'
import MatchContext from '../context/match/matchContext';
import axios from "axios"

const Matches = (props) => {
  let { league } = props;
  // const context = useContext(MatchContext) || {};
  // const {getMatches} = context;
  const [currentLeague, setCurrentLeague] = useState("PL");

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiURL = "https://api.football-data.org/v4";

  const getMatches = async () => {

    const options = {
      method: 'GET',
      url: 'http://ip-api.com/json/24.48.0.1',
    }
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

  }
  // useEffect(() => {
  //   getMatches();

  //   // eslint-disable-next-line
  // })
  const handleOnClick = () => {
    console.log(league)
    getMatches();
  }

  return (
    <>
      <div className='w-2/3'>
        <button type="button" className='border-4' onClick={handleOnClick}>CLICK ME</button>

        Matches
        <h1>League:{league}</h1>
      </div>
    </>
  )
}

export default Matches
