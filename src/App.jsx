import React from 'react'
import logo from './logo.svg';
import './App.less';
import { HashRouter, Route, Routes } from 'react-router-dom'

import { DashBoard } from './pages/dashboard/dashboard'
import { Login } from './pages/login/login'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' exact element={<DashBoard />} />
            <Route path='test' element={<Login/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
