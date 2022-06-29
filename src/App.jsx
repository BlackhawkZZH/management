import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';


//import Login from './pages/login/login'
//import DashBoard from './pages/dashboard/dashboard'
//import { Summary } from './components/summary/summary';
//import { Users } from './components/users/users'
//import { Goods } from './components/goods/goods'
import store from '../src/redux/store/index';

import './App.less';


const DashBoard = lazy(() => import('./pages/dashboard/dashboard'))
const Summary = React.lazy(
  () => import('./components/summary/summary').then(module => ({ default: module.Summary }))
);
const Users = React.lazy(
  () => import('./components/users/users').then(module => ({ default: module.Users }))
);
const Goods = React.lazy(
  () => import('./components/goods/goods').then(module => ({ default: module.Goods }))
);

const Login = lazy(() => import('./pages/login/login'))

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<div>loading!</div>}>
            <Routes>
              <Route path='/dashboard' element={<DashBoard />}>
                <Route path='welcome' element={<Summary />} />
                <Route path="users" element={<Users />} />
                <Route path="goods" element={<Goods />} />
              </Route>
              <Route path='/login' element={<Login />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
