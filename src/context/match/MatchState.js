import React from 'react'
import MatchContext from './matchContext'

const MatchState = (props) => {

    const apiKey = import.meta.env.VITE_API_KEY;
    const apiURL= "https://api.football-data.org/v4";

    const getMatches = async (league)=>{
        try{
            console.log("yes");
            const response = await fetch(`${apiURL}/${league}`, {
                method: "GET",
                headers: {
                    "X-Auth-Token": apiKey
                },
            });
            const json = response.json();
            console.log(json);

        }catch(error){
            // alert("server error");
            // console.log(error.message)
        }
    }

    return (
        <MatchContext.Provider value={{getMatches}} >
 
            {props.children}
        </MatchContext.Provider>
    )
}

export default MatchState;

