import React, { useEffect, useState } from 'react'
import Icon from './Icon'
import { Link } from 'react-router-dom'
import './css/NavBar.css';
import { useSelector } from 'react-redux';

export default function NavBar() {
    const [user, setUser] = useState("User");
    const { totalQuantity } = useSelector((state) => state.cart);


    useEffect(()=> setUser("User"), [])
  return (
    <div className='nav'>
        <div className='logo'>
            <Icon/>
        </div>
        <div className='list'>
            <span>
                <Link className='link' to='Menu'>Menu</Link>
            </span>
            <span>
                <Link className='link' to='Cart'>Cart ({totalQuantity})</Link>
            </span>
            <span className='d-flex w-auto h-auto'>
                <p>Hi, {user}</p>
            </span>
        </div>
    </div>
  )
}
