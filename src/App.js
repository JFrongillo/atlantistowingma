import React from 'react';
import { Route, Routes } from 'react-router-dom';

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

//Importing error page
import NotFound from './pages/404/NotFound';

export default function App() {
  return (
    <div>
        <Header />
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/services/towing" element={<Towing />} />
                <Route path="/services/storage" element={<Storage />} />
                <Route path="/services/tire-change" element={<TireChange />} />
                <Route path="/services/mechanical-works" element={<MechanicalWorks />} />
                <Route path="/services/collision-repair" element={<CollisionRepair />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}