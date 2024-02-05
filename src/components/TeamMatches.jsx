import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import axios from 'axios'
import PendingMatches from './PendingMatches'
import FinishedMatches from './FinishedMatches'

//(left side green line if win else red line + bg)

const TeamMatches = () => {
    const params = useParams();
    const { id } = params;
    let location = useLocation();
    const [progress, setProgress] = useState(0);
    const [pendingMatches, setPendingMatches] = useState(null);
    const [finishedMatches, setFinishedMatches] = useState(null);
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiURL = import.meta.env.VITE_API_URL;

    const getTeamMatches = async () => {
        try {
            setProgress(progress + 25);
            let response = await axios.get(`${apiURL}/teams/${id}/matches`, {
                headers: {
                    'X-Auth-Token': apiKey
                }
            });
            setProgress(progress + 50);
            const matches = response.data.matches;
            const date = new Date();
            const iso_time = date.toISOString();
            setProgress(progress + 75);
            // console.log(matches[0].utcDate);
            // console.log(date.toISOString());
            setPendingMatches(matches.filter((match) => match.utcDate > iso_time));
            // console.log(pendingMatches)
            setFinishedMatches(matches.filter((match) => match.utcDate < iso_time));
            // console.log(finishedMatches)
            setProgress(100);

        } catch (error) {
            console.error(error);
        }
    }

    const handleClick = () => {
        getTeamMatches();
    }

    // useEffect(() => {
    //     getTeamMatches();
    // }, [])


    let element;
    if (location.pathname === `/team/fixtures/:id`) {
        element = <PendingMatches key={id} matches={pendingMatches}/>
    } else {
        element = <FinishedMatches key={id} matches={finishedMatches}/>
    }

    return (
        <>
            <LoadingBar
                color='#7bff00'
                progress={progress}
                onLoaderFinished={() => setProgress(0)} />

            <Link to="/">View Finished Matches</Link>

            <button className='border-2 border-blue-500' type="button" onClick={handleClick}>CLICK ME</button>
        </>

    )
}

export default TeamMatches
