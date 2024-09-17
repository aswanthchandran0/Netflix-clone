import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { action,original } from './urls'
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={original} title='Netflix Original'/>
      <RowPost url={action} title='Action' isSmall/>
    </div>
  )
}

export default App
