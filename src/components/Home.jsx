import React from 'react'
import Leagues from '../components/Leagues'
import Matches from '../components/Matches'


const Home = (props) => {
  let {league,leaguelogo} = props;
  return (
    <div className="flex"> 
      <Leagues/>
      {/* <LeagueStandings league={league} leaguelogo={leaguelogo} key={league}></LeagueStandings> */}
      <Matches league={league} leaguelogo={leaguelogo} key={league} />
      
    </div>
  )
}

export default Home
