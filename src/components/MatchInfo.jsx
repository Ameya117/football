import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import axios from "axios"

const MatchInfo = () => {

    const params = useParams();
    const { id } = params;
    const [progress, setProgress] = useState(0);
    const [currentMatch, setCurrentMatch] = useState(null);
    const apiURL = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const getSelectedMatch = async () => {
        try {
            setProgress(progress + 25);
            const response = await axios.get(`${apiURL}/matches/${id}`, {
                headers: {
                    'X-Auth-Token': apiKey
                }
            });
            setProgress(progress + 50);
            let data = response.data;
            setProgress(progress + 75);
            setCurrentMatch(data);
            console.log(data)
            setProgress(100);

        } catch (error) {
            console.error(error);
        }
    }

    // useEffect(() => {
    //     getSelectedMatch();
    //     // eslint-disable-next-line
    // }, [])

    const handleClick = ()=>{//DLETE LATER - REPLACED BY USEEFFECT
        getSelectedMatch();
    }

    return (
        <>
                <LoadingBar
                    color='#7bff00'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}/>
                    <div>
                {/* INDIVIDUAL MATCH INFO */}
                MATCH INFO : {id}
                <button className='border-2 border-blue-500' type="button" onClick={handleClick}>CLICK ME</button>
                {currentMatch?<div>
                    <div>

                    </div>

                </div>:
                <div>
                    <h1>MATCH UNAVAIBLE</h1>
                </div>
                }



            </div>
        </>
    )
}

export default MatchInfo
