import React, { useContext, useEffect } from 'react';
import climg from './cl.avif';
import bundesliga from './bundesliga.avif';
import PL from './premierleague.avif';
import ligue1 from './ligue1.avif';
import primeradivision from './primeradivision.avif';
import seriea from './seriea.avif';
import eredivise from './eredivise.avif';
import ligaportugal from './ligaportugal.avif';
import conbemol from './conbemol.avif';
import { Link } from "react-router-dom";

const Leagues = () => {
  return (
    <>
      {/*hover:borders ... min-h-screen  */}
      <div className="flex-col  mt-10  bg-dark-400 h-screen top-0 min-h-screen">
        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2 border-2 border-black hover:border-4'>
          <Link to="/CL/matches" className='flex'>
            <img className="mx-auto md:mx-auto h-10 sm:h-12 md:h-14 lg:ml-0 lg:my-2 xl:h-20 xl:ml-2 league-image" src={climg} alt="champions league logo" />
            <div className="my-auto mr-auto hidden lg:block">
              <h1 className="my-auto text-xl">
                UEFA CHAMPIONS LEAGUE
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg m-2 border-2 border-black hover:border-4'>
          <Link to="/BL1/matches" className='flex xl:my-auto'>
            <img className="mx-auto md:mx-auto h-10 sm:h-12 md:h-14 lg:ml-0 lg:my-2 xl:h-20 xl:ml-2 league-image " src={bundesliga} alt="bundesliga logo" />
            <div className="my-auto mr-auto hidden lg:block">
              <h1 className="m-auto text-xl">
                BUNDESLIGA
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg m-2 border-2 border-black hover:border-4'>
          <Link to="/PL/matches" className='flex inset-x-1.5'>
            <img className="mx-auto md:mx-auto h-10 sm:h-12 md:h-14 lg:ml-0 lg:my-2 xl:h-20 xl:ml-2 league-image" src={PL} alt="premier league logo" />
            <div className="my-auto mr-auto hidden lg:block">
              <h1 className="my-auto text-xl">
                PREMIER LEAGUE
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2 border-2 border-black hover:border-4'>
          <Link to="/DED/matches" className='flex'>
            <img className="mx-auto md:mx-auto h-10 sm:h-12 md:h-14 lg:ml-0 lg:my-2 xl:h-20 xl:ml-2 league-image" src={eredivise} alt="eredivisie logo" />
            <div className="my-auto mr-auto hidden lg:block">
              <h1 className="my-auto text-xl">
                EREDIVISIE
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2 border-2 border-black hover:border-4'>
          <Link to="/PD/matches" className='flex'>
            <img className="mx-auto md:mx-auto h-10 sm:h-12 md:h-14 lg:ml-0 lg:my-2 xl:h-20 xl:ml-2 league-image" src={primeradivision} alt="primeradivision logo" />
            <div className="my-auto mr-auto hidden lg:block">
              <h1 className="my-auto text-xl">
                PRIMERIA DIVISION
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2 border-2 border-black hover:border-4'>
          <Link to="/FL1/matches" className='flex'>
            <img className="mx-auto md:mx-auto h-10 sm:h-12 md:h-14 lg:ml-0 lg:my-2 xl:h-20 xl:ml-2 league-image" src={ligue1} alt="Ligue 1 logo" />
            <div className="my-auto mr-auto hidden lg:block">
              <h1 className="my-auto text-xl">
                LIGUE 1
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2 border-2 border-black hover:border-4'>
          <Link to="/PPL/matches" className='flex'>
            <img className="mx-auto md:mx-auto h-10 sm:h-12 md:h-14 lg:ml-0 lg:my-2 xl:h-20 xl:ml-2 league-image" src={ligaportugal} alt="Liga portugal logo" />
            <div className="my-auto mr-auto hidden lg:block">
              <h1 className="my-auto text-xl ">
                PRIMEIRA LIGA
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2 border-2 border-black hover:border-4'>
          <Link to="/SA/matches" className='flex'>
            <img className="mx-auto md:mx-auto h-10 sm:h-12 md:h-14 lg:ml-0 lg:my-2 xl:h-20 xl:ml-2 league-image" src={seriea} alt="Serie A logo" />
            <div className="my-auto mr-auto hidden lg:block">
              <h1 className="my-auto text-xl">
                SERIE A
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2 border-2 border-black hover:border-4'>
          <Link to="/CLI/matches" className='flex'>
            <img className="mx-auto md:mx-auto h-10 sm:h-12 md:h-14 lg:ml-0 lg:my-2 xl:h-20 xl:ml-2 league-image" src={conbemol} alt="COPA LIBERTADORES logo" />
            <div className="my-auto mr-auto hidden lg:block">
              <h1 className="my-auto text-xl">
                COPA LIBERTADORES
              </h1>
            </div>
          </Link>

        </div>
      </div>
    </>
  )
}

export default Leagues
