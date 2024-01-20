import React,{useContext,useEffect} from 'react';
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
      <div className=" flex-col w-1/3 bg-red-400 h-screen">
        <div className='h-22 bg-blue-100 '>
          <Link to="/hampionsleague" className='flex'>
            <img className="h-20 ml-24" src={climg} alt="champions league logo" />
            <div className="place-content-center p-3">

              <h1 className="mt-3 mx-3 text-xl">
                UEFA CHAMPIONS LEAGUE
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-200 '>
          <Link to="/bundesliga" className='flex'>
            <img className=" h-20 ml-24" src={bundesliga} alt="bundesliga logo" />
            <div className="place-content-center p-3">
              <h1 className="mt-3 mx-3 text-xl">
                BUNDESLIGA
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-300'>

          <Link to="/premierleague" className='flex inset-x-1.5'>
            <img className="h-20 ml-24" src={PL} alt="premier league logo" />
            <div className="place-content-center p-3">
              <h1 className="mt-3 mx-3 text-xl">
                PREMIER LEAGUE
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-400 '>
          <Link to="/eredivisie" className='flex'>
            <img className="h-20 ml-24" src={eredivise} alt="champions league logo" />
            <div className="place-content-center p-3">

              <h1 className="mt-3 mx-3 text-xl">
                EREDIVISIE
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-500'>
          <Link to="/primeriadivision" className='flex'>
            <img className="h-20 ml-24" src={primeradivision} alt="primeradivision logo" />
            <div className="place-content-center p-3">

              <h1 className="mt-3 mx-3 text-xl">
                PRIMERIA DIVISION
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-600'>
          <Link to="/ligue1" className='flex'>
            <img className="h-20 ml-24" src={ligue1} alt="Ligue 1 logo" />
            <div className="place-content-center p-3">

              <h1 className="mt-3 mx-3 text-xl">
                LIGUE 1
              </h1>
            </div>
          </Link>
        </div>


        <div className='h-22 bg-blue-700'>
          <Link to="/primeiraliga" className='flex'>
            <img className="h-20 ml-24" src={ligaportugal} alt="Liga portugal logo" />
            <div className="place-content-center p-3">

              <h1 className="mt-3 mx-3 text-xl">
                PRIMEIRA LIGA
              </h1>
            </div>
          </Link>

        </div>


        <div className='h-22 bg-blue-800'>
          <Link to="/seirea" className='flex'>
            <img className="h-20 ml-24" src={seriea} alt="Serie A logo" />
            <div className="place-content-center p-3">

              <h1 className="mt-3 mx-3 text-xl">
                SERIE A
              </h1>
            </div>
          </Link>
        </div>

        <div className='h-22 bg-blue-900'>
          <Link to="/copalibertadores" className='flex'>
            <img className="h-20 ml-24" src={conbemol} alt="COPA LIBERTADORES logo" />
            <div className="place-content-center p-3">

              <h1 className="mt-3 mx-3 text-xl">
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
