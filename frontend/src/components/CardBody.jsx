import React, { useState } from 'react'
import './css/CardBody.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function CardBody(props) {
    const [count, setCount] = useState(1);
    const decrement = () => {
        setCount(count - 1);
    }
    const increment = () => {
        setCount(count + 1);
    }

    const dispatch = useDispatch();

  return (
    <div className='cardbody d-flex flex-column align-items-start p-3'>
        <div className='title-line d-flex justify-content-between gap-5 w-100'>
            <span className='title'>{props.title}</span>
            <button className='add' onClick={() => {setCount(1); dispatch(addToCart({ id: props.id, name: props.name, price: props.price }));}}>+</button>
        </div>
        <div>
            <p className='description mb-1'>{props.description}</p>
        </div>
        <div className='container-fluid d-flex justify-content-between align-items-center gap-5 p-0'>
            <div>
                <h1 className="price d-block">${props.price}</h1>
            </div>
            <div className="number-input-group rounded-5">
                <button className="but btn-decrement" onClick={decrement}>-</button>
                <input type="number" className="input" id="numberInput" value={count} onChange={(event) => setCount(Number(event.target.value))} min="1" max="20"/>
                <button className="but btn-increment" onClick={increment}>+</button>
            </div>
        </div>
    </div>
  )
}
