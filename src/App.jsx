import React from 'react'

import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DashBoard } from './pages/dashboard/dashboard'
import { DefaultMsg } from './components/defaultmsg/defaultmsg';
import Login from './pages/login/login'
import { Users } from './components/users/users'
import { Goods } from './components/goods/goods'
import { Provider } from 'react-redux';
import store from '../src/redux/store/index';


import './App.less';


function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<DashBoard />}>
              <Route path='welcome' element={<DefaultMsg />}></Route>
              <Route path="users" element={<Users />} />
              <Route path="goods" element={<Goods />} />
            </Route>
            <Route path='/' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
