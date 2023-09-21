import React from 'react'
import ReactDOM from 'react-dom/client'
import LogIn from './pages/logInAndRegister/logIn/LogIn';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Landing /> */}
    <LogIn/>
  </React.StrictMode>,
)
