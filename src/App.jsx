import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DashBoard } from './pages/dashboard/dashboard'
import { Summary } from './components/summary/summary';
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
            <Route path='dashboard' element={<DashBoard />}>
              <Route path='welcome' element={<Summary />}></Route>
              <Route path="users" element={<Users />} />
              <Route path="goods" element={<Goods />} />
            </Route>
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
