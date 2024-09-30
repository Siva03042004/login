import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Log from './Components/Log';
import Signin from './Components/Signin';
import Landing from './Components/Landing';
import Todo from './Components/Todo';
import News from './Components/News';
import Weather from './Components/Weather';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Log />} />
        <Route path='/signup' element={<Signin />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};
