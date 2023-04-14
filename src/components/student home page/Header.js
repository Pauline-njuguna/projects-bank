import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
            <img src='https://o.remove.bg/downloads/56ab9f75-f768-4336-b1e6-52ad53ef7b0b/b0d7e1b5aa7fabb42bc1d622a1bedbc5--library-logo-technology-logo-removebg-preview.png' alt='logo'/>
            <h2>Pay-Bank</h2>

        <div className='header-nav'>
            <span className='option-one'> Home</span>
            <span className='option-one'>About us</span>
            <span className='option-one'>Contact us</span>
        </div>

        <div className='student-logout'>
            <button className='logout'>logout</button>
        </div>

    </div>
  )
}

export default Header

