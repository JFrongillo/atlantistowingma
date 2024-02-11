import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Importing Header and **FUTURE** Footer Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Importing visable pages Pages
import Main from './pages/main/Main';
import About from './pages/about/About';

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
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}