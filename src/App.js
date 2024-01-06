import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Importing Header and **FUTURE** Footer Components
import Header from './components/Header';

//Importing visable pages Pages
import Main from './pages/main/Main';

export default function App() {
  return (
    <div>
        <Header />
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
    </div>
  );
}