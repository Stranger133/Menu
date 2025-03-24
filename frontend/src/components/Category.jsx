import React, { useEffect, useState } from 'react'
import Card2 from './Card2';
import './css/Category.css'

export default function Category(props) {
    const [products, setProducts] = useState([{}]);
    useEffect(()=>{
        fetch(`http://localhost:8080/products/${props.id}` , {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.error("Error Fetching Products: " + error.message))
    }, [props.id])
  return (
    <div className='category'>
        <div className='mb-4'>
            <h1 className="type text-start">
                {props.type}
            </h1>
        </div>
        <div className="cards d-flex flex-column gap-3">
        {
            products.map((product) => (
                <Card2 title={product.name} description={product.description} price={product.price} id={product.id}/>
            ))
        }
        </div>
    </div>
  )
}
