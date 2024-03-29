import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import axios from 'axios';

const LeagueStandings = (props) => {
  let { league, leaguelogo } = props;
  const params = useParams();
  const { id } = params;
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiURL = import.meta.env.VITE_API_URL;

  const [progress, setProgress] = useState(0);
  const [teams, setTeams] = useState(null);

  const getTeams = async () => {
    try {
      setProgress(progress + 25);
      let response = await axios.get(`${apiURL}/competitions/${id}/standings`, {
        headers: {
          'X-Auth-Token': apiKey
        }
      });
      setProgress(progress + 50);
      const data = response.data;
      setProgress(progress + 75);
      setTeams(data.standings[0].table);
      setProgress(100);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTeams();
    //eslint-disable-next-line
  }, [])


  return (
    <>
      <div className='mx-2 rounded-lg p-3 flex flex-col text-sm md:text-lg lg:text-xl'>
        <div className='flex justify-end'>
          <h2 className="mx-2 text-white font-semibold">PLD</h2>
          <h2 className="mx-2 text-white font-semibold">W</h2>
          <h2 className="mx-2 text-white font-semibold hidden md:block">D</h2>
          <h2 className="mx-2 text-white font-semibold hidden md:block">L</h2>
          <h2 className="mx-2 text-white font-semibold">PTS</h2>
        </div>

        <div>

          {teams && teams.map((element) => {
            return <div className="flex flex-row justify-between my-2 bg-slate-500 opacity-75 rounded-lg lg:h-24 items-center" key={element.team.id}>
              <Link to={`/team/matches/${element.team.id}`}>

                <div className='flex my-4 mx-2'>
                  <h2 className='grid place-content-center font-semisbold lg:text-2xl'> {element.position}</h2>
                  <img className="h-8 md:12 mx-2 grid place-content-center md:h-10 lg:h-14" src={element.team.crest} alt={`${element.team.shortName} logo`} />
                  <div className='grid place-content-center'>
                    <h2 className='hidden sm:block font-bold text-sm md:text-md lg:text-2xl'>{element.team.name}</h2>
                    <h2 className='block sm:hidden font-bold'>{element.team.shortName}</h2>
                  </div>
                </div>
              </Link>

              <div className='flex flex-row justify-around mr-2 font-bold lg:text-xl text-white'>

                <h2 className="mr-3 md:mr-2 lg:mr-4 xl:mr-4 grid place-content-center">
                  {element.playedGames}
                </h2>
                <h2 className="mr-3 md:mr-4 lg:mr-4 xl:mr-4 grid place-content-center">
                  {element.won}
                </h2>
                <h2 className="hidden  md:block md:my-auto  md:mr-4 lg:mr-4 xl:mr-4">
                  {element.draw}
                </h2>
                <h2 className=" hidden md:block md:my-auto md:mr-4 lg:mr-4 xl:mr-4">
                  {element.lost}
                </h2>
                <h2 className="mr-2 grid place-content-center">
                  {element.points}
                </h2>
              </div>
            </div>
          })}

        </div>
      </div>
    </>
  )
}

export default LeagueStandings

