import React from 'react'
import Leagues from '../components/Leagues'
import Matches from '../components/Matches'


const Home = (props) => {
  let {league} = props;
  return (
    <div className="flex"> 
      <Leagues league={league}/>
      <Matches league={league} />
      
    </div>
  )
}

export default Home
