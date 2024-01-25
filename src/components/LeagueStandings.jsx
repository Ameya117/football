import React, { useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import axios from 'axios';



//http://api.football-data.org/v4/competitions/PL/standings
const LeagueStandings = (props) => {
  let { league, leaguelogo } = props;
  let location = useLocation();
  const params = useParams();
  const { id } = params;
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiURL = import.meta.env.VITE_API_URL;

  const [progress, setProgress] = useState(0);
  const [teams, setTeams] = useState(null);
  const [currentLeague, setCurrentLeague] = useState("");//??
  const [leagueID, setLeagueID] = useState(2002);
  const [leagueCode, setLeagueCode] = useState("PL");

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
      setLeagueID(data.competition.id);
      setProgress(progress + 75);
      setCurrentLeague(data.competition.name);
      setTeams(data.standings[0].table);
      setLeagueCode(data.competition.id)
      setProgress(100);

    } catch (error) {
      console.error(error);
    }
  }


  const handleClick = () => {
    getTeams();
    console.log(teams);

  }

  return (
    <>
      <div>
        
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
                  <Link className={`inline-block hover:border-b-4 rounded-t py-2 px-4 font-semibold ${location.pathname === '/matches' ? 'border-b-2' : ''}`} to={`/${league}/matches`}>Fixtures</Link>
                </li>
                <li className="mr-1">
                  <Link className={`inline-block py-2 px-4 font-semibold ${location.pathname === `/${league}/table/${leagueID}` ? 'border-b-2' : ''}`} to={`/${leagueCode}/table/${leagueID}`}>Table</Link>
                </li>

              </ul>
            </div>
            <div className='standings-table bg-yellow-100 w-'>
              {teams && teams.map((element) => { //add link for team info??
                return <div className="flex flex-row justify-between my-1  bg-blue-200" key={element.team.id}>
                  <div className='flex my-4 mx-2'>
                    {element.position}
                    <img className="h-16" src={element.team.crest} alt="" />
                    {element.team.name}
                  </div>
                  <div>
                    SCORE
                  </div>

                </div>
              })}

            </div>

          </div>
        <button type="button" className='bg-red-100' onClick={handleClick}> ARRAY OF TEAMS</button>
        </div>
      
    </>
  )
}

export default LeagueStandings
