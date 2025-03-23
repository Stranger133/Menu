import React from 'react'
import './css/Menu.css'

export default function Menu() {
  return (
    <div className='menu'>
      <div className='banner'>
        <span className='text'>
          <span>
            <h1>Taste Haven</h1>
          </span>
          <span>
            <h2>
              From Our Kitchen to your Heart ...
            </h2>
          </span>
        </span>
        <span className='burger'>
          <img src='./burger.png' alt='Burger'/>
        </span>
      </div>
    </div>
  )
}
