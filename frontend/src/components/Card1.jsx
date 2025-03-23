import React from 'react'
import './css/Card1.css'

export default function Card1(props) {
  return (
    <div className='bestCard'>
        <span>
            <img width="235px" height="125px" src={props.source} alt={props.title}/>
        </span>
        <div className='d-flex flex-column align-items-start p-3'>
            <div className='title-line d-flex justify-content-between gap-5 w-100'>
                <span className='title'>{props.title}</span>
                <span className='add'>+</span>
            </div>
            <div>
                <p className='description mb-1'>{props.description}</p>
            </div>
            <div className='d-flex justify-content-between align-items-start gap-5'>
                <div>
                    <h1 className="price d-block">${props.price}</h1>
                </div>
                <div className="number-input-group rounded-5">
                    <button className="btn btn-decrement" onclick="decrement()">-</button>
                    <input type="number" className="input" id="numberInput" value="1" min="1" max="20"/>
                    <button className="btn btn-increment" onclick="increment()">+</button>
                </div>
            </div>
        </div>
    </div>
  )
}
