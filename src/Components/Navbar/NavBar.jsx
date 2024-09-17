import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://netflixo-ivory.vercel.app/images/logo.png" alt="netflix log" />
      <ul className='nav-links'>
        <li><a href="#">Home</a></li>
        <li><a href="#">TvShows</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">New&amp;Popular</a></li>
        <li><a href="#">My list</a></li>
        <li><a href="#">Browse My languages</a></li>
        
      </ul>
      <img className='avatar' src="https://cdn.mos.cms.futurecdn.net/Tybo2ToSMdFHz4zZbq2QSL.jpg" alt="avatar" />
    </div>
  )
}

export default NavBar
