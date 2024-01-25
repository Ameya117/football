import React from 'react'

const MatchScore = (props) => {
    let { match } = props;
    const date = match.utcDate;

    return (
        <>
            <div className='flex place-content-center border-2 my-3 bg-gray-200'>
                <div className='w-2/3 my-3'>
                    <div className="home-team flex justify-between my-1 mx-auto place-content-center w-1/2">
                        <div className='flex flex-col md:flex-row'>
                            <img className='sm:mr-2 h-16 ' src={match.homeTeam.crest} alt={match.homeTeam.shortName} />
                            <h1 className="hidden sm:block">{match.homeTeam.name}</h1>
                            <h1 className="sm:hidden">{match.homeTeam.shortName}</h1>
                        </div>
                        <div className='my-1'>
                            <h1 className=' ml-2 md:ml-12'> {match.score.fullTime.home}</h1>
                        </div>
                    </div>
                    <div className='home-team flex justify-between my-1 mx-auto place-content-center w-1/2'>
                        <div className="flex flex-col md:flex-row">
                            <img className='sm:mr-2 h-16' src={match.awayTeam.crest} alt={match.awayTeam.shortName} />
                            <h1 className="hidden sm:block ">{match.awayTeam.name}</h1>
                            <h1 className="sm:hidden">{match.awayTeam.shortName}</h1>
                        </div>
                        <div className="my-1 ">
                            <h1 className='ml-2 md:ml-12 '>{match.score.fullTime.away}</h1>
                        </div>
                    </div>
                </div>

                <div className='my-auto w-1/3'>
                    <div className='flex place-content-center'>
                        <h2>DATE: <br />{date}</h2>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MatchScore
