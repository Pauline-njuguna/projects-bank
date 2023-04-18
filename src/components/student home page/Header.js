import React from 'react'
import './Header.css'
import Sidebar from './Sidebar'
import Course from './Course'
import Footer from './Footer'
function Header() {
  return (
    <>
        <div className='header'>
                    <img src='https://o.remove.bg/downloads/f0545816-0851-4d63-9d5d-450343fd5161/63f816ae5cfb9e06b6852b78_Screenshot_2023-02-23_at_9.39.34_PM-removebg-preview.png' alt='logo'/>
                    <h2>Pay-Bank</h2>

                <div className='header-nav'>
                    <span className='option-one'> Home</span> 
                    <span className='option-one'>About us</span>
                    <span className='option-one'>Contact us</span>
                </div>

                <div className='student-logout'>
                    <button className='logout'>login</button>
                </div>

            </div>

            <Sidebar/>
            <Course/>
            <Footer/>
    </>
    
  )
}

export default Header

