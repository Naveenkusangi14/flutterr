import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Signup/> */}
    <Home/>
    {/* <Login /> */}
  </React.StrictMode>,
)
