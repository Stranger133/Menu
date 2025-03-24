import React, { useEffect, useState } from 'react'
import Card1 from './Card1';
import './css/BestSelling.css'

export default function BestSelling() {
    const [products, setProducts] = useState([{}]);
    useEffect(()=>{
        fetch(`http://localhost:8080/products/best-selling` , {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.error("Error Fetching Products: " + error.message))
    }, [])
  return (
    <div className='bestselling m-4 mt-5'>
        <div className='title mb-3'>
            <h1>Best-Selling</h1>
        </div>
        <div className='carousel w-100 d-flex gap-4 overflow-y-hidden'>
            {
                products.map((product) => (
                    <Card1 title={product.name} description={product.description} price={product.price} id={product.id}/>
                ))
            }
        </div>
    </div>
  )
}
