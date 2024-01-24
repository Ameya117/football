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
      <div className="flex-col w-1/6 sm:w-1/3 mt-10  bg-dark-400 h-screen top-0 min-h-screen">
        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2'>
          <Link to="/championsleague" className='flex'>
            <img className="mr-2 md:my-auto md:ml-auto h-14 lg:ml-16 lg:my-2 lg:h-20 xl:ml-auto league-image" src={climg} alt="champions league logo" />
            <div className="my-auto mr-auto hidden sm:block">
              <h1 className="my-auto text-xl ">
                UEFA CHAMPIONS LEAGUE
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg m-2 border-2 border-black hover:border-4'>
          <Link to="/bundesliga" className='flex xl:my-auto'>
            <img className="mr-2 md:my-auto md:ml-12 h-14 lg:ml-16 lg:my-2 lg:h-20 xl:ml-auto league-image" src={bundesliga} alt="bundesliga logo" />
            <div className="my-auto mr-auto invisible sm:visible">
              <h1 className="m-auto text-xl">
                BUNDESLIGA
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg m-2'>
          <Link to="/premierleague" className='flex inset-x-1.5'>
            <img className="mr-2 md:my-auto md:ml-12 h-14 lg:ml-16 lg:my-2 lg:h-20 xl:ml-auto league-image" src={PL} alt="premier league logo" />
            <div className="my-auto mr-auto invisible sm:visible">
              <h1 className="my-auto text-xl">
                PREMIER LEAGUE
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2'>
          <Link to="/eredivisie" className='flex'>
            <img className="mr-2 md:my-auto md:ml-12 h-14 lg:ml-16 lg:my-2 lg:h-20 xl:ml-auto league-image" src={eredivise} alt="eredivisie logo" />
            <div className="my-auto mr-auto invisible sm:visible">
              <h1 className="my-auto text-xl ">
                EREDIVISIE
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2'>
          <Link to="/primeriadivision" className='flex'>
            <img className="mr-2 md:my-auto md:ml-12 h-14 lg:ml-16 lg:my-2 lg:h-20 xl:ml-auto league-image" src={primeradivision} alt="primeradivision logo" />
            <div className="my-auto mr-auto invisible sm:visible">
              <h1 className="my-auto text-xl ">
                PRIMERIA DIVISION
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2'>
          <Link to="/ligue1" className='flex'>
            <img className="mr-2 md:my-auto md:ml-12 h-14 lg:ml-16 lg:my-2 lg:h-20 xl:ml-auto league-image" src={ligue1} alt="Ligue 1 logo" />
            <div className="my-auto mr-auto invisible sm:visible">
              <h1 className="my-auto text-xl ">
                LIGUE 1
              </h1>
            </div>
          </Link>
        </div>


        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2'>
          <Link to="/primeiraliga" className='flex'>
            <img className="mr-2 md:my-auto md:ml-12 h-14 lg:ml-16 lg:my-2 lg:h-20 xl:ml-auto league-image" src={ligaportugal} alt="Liga portugal logo" />
            <div className="my-auto mr-auto invisible sm:visible">
              <h1 className="my-auto text-xl ">
                PRIMEIRA LIGA
              </h1>
            </div>
          </Link>

        </div>


        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2'>
          <Link to="/seirea" className='flex'>
            <img className="mr-2 md:my-auto md:ml-12 h-14 lg:ml-16 lg:my-2 lg:h-20 xl:ml-auto league-image" src={seriea} alt="Serie A logo" />
            <div className="my-auto mr-auto invisible sm:visible">
              <h1 className="my-auto text-xl ">
                SERIE A
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 rounded-lg mb-2 mx-2'>
          <Link to="/copalibertadores" className='flex'>
            <img className="mr-2 md:my-auto md:ml-12 h-14 lg:ml-16 lg:my-2 lg:h-20 xl:ml-auto league-image" src={conbemol} alt="COPA LIBERTADORES logo" />
            <div className="my-auto mr-auto invisible sm:visible">
              <h1 className="my-auto text-xl ">
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
