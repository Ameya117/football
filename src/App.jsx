import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import  LandingPage from './components/LandingPage';
import  MatchInfo from './components/MatchInfo';
import climg from './components/cl.avif';
import bundesliga from './components/bundesliga.avif';
import PL from './components/premierleague.avif';
import ligue1 from './components/ligue1.avif';
import primeradivision from './components/primeradivision.avif';
import seriea from './components/seriea.avif';
import eredivise from './components/eredivise.avif';
import ligaportugal from './components/ligaportugal.avif';
import conbemol from './components/conbemol.avif';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          
          {/* <Route exact path="/" element={<LandingPage/>}></Route> */}
          <Route exact path="/" element={<Home key="landingpage" league="PL" leaguelogo={PL}/>}></Route>
          <Route exact path="/home" element={<Home key="home" league="PL" leaguelogo={PL}/>}></Route>
          <Route exact path="/championsleague" element={<Home key="CL" league="CL" leaguelogo={climg}/>}></Route>
          <Route exact path="/premierleague" element={<Home key="PL" league="PL" leaguelogo={PL}/>}></Route>
          <Route exact path="/bundesliga" element={<Home key="BL1" league="BL1" leaguelogo={bundesliga}/>}></Route>
          <Route exact path="/eredivisie" element={<Home key="DED" league="DED " leaguelogo={eredivise}/>}></Route>
          <Route exact path="/primeriadivision" element={<Home key="PD" league="PD"leaguelogo={primeradivision}/>}></Route>
          <Route exact path="/ligue1" element={<Home key="FL1" league="FL1" leaguelogo={ligue1}/> }></Route>
          <Route exact path="/primeiraliga" element={<Home key="PPL" league="PPL" leaguelogo={ligaportugal}/>}></Route>
          <Route exact path="/seirea" element={<Home key="SA" league="SA" leaguelogo={seriea}/>}></Route>
          <Route exact path="/copalibertadores" element={<Home key="CLI" league="CLI" leaguelogo={conbemol}/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/matchinfo/:id" element={<MatchInfo />}></Route>
        </Routes>

      </Router>
    </>
  )
}

export default App
