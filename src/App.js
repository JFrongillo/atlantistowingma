import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

//Importing Header and **FUTURE** Footer Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Importing visable pages Pages
import Main from './pages/main/Main';
import About from './pages/about/About';
import Towing from './pages/towing/Towing';
import Storage from './pages/storage/Storage';
import TireChange from './pages/tire-change/TireChange';
import MechanicalWorks from './pages/mechanical-works/Mechanical';
import CollisionRepair from './pages/collison-repair/Collison';

//Tow Calculator pages.
import CalculateTow from './pages/CalculateTow/CalculateTow';

//Importing error page
import NotFound from './pages/404/NotFound';



export default function App() {

  const location = useLocation();

  //const showHeaderFooter = location.pathname !== "/services/towing/get_towed"; 

  return (
    <div>
        { <Header />}
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/services/towing" element={<Towing />} />
                <Route path="/services/storage" element={<Storage />} />
                <Route path="/services/tire-change" element={<TireChange />} />
                <Route path="/services/mechanical-works" element={<MechanicalWorks />} />
                <Route path="/services/collision-repair" element={<CollisionRepair />} />
                <Route path= "/services/towing/get_towed" element={<CalculateTow />}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
        { <Footer />}
    </div>
  );
}