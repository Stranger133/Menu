import React from 'react'
import Card1 from './Card1';
import './css/BestSelling.css'

export default function BestSelling() {
    const numComponents = 5;
  return (
    <div className='m-4'>
        <div className='title mb-3'>
            <h1>Best-Selling</h1>
        </div>
        <div className='carousel w-100 d-flex gap-4 overflow-y-hidden'>
            {
            Array.from({ length: numComponents }).map((_, i) => (
                <Card1 source={"./burger.png"} title={"Test"} description={"Testing this card alignments to check if its aligned..."} price={"9.00"} id={"232"}/>
            ))
            }
        </div>
    </div>
  )
}
