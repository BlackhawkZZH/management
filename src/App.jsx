import React from 'react'

import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DashBoard } from './pages/dashboard/dashboard'
import { DefaultMsg } from './components/defaultmsg/defaultmsg';
import { Login } from './pages/login/login'
import { Users } from './components/users/users'
import { Goods } from './components/goods/goods'

import './App.less';

function App() {
  const isLogged = useSelector(state => state.isLogged)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isLogged ?
            <Route path="dashboard" element={<DashBoard />}>
              <Route path='welcome' element={<DefaultMsg />}></Route>
              <Route path="users" element={<Users />} />
              <Route path="goods" element={<Goods />} />
            </Route> : ''}
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
