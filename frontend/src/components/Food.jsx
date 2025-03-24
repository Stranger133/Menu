import React, { useEffect, useState } from 'react'
import Category from './Category'
import './css/Food.css'
import axios from 'axios';

export default function Food() {
  const [types, setTypes] = useState(['']);
  const [currentType, setType] = useState({id:5, type:"Platters"});

  useEffect(() => {
    axios.get('http://localhost:8080/types')
    .then(response => {
      setTypes(response.data.reverse());
    })
    .catch(error => {
      console.error('Error fetching Types:', error);
    });
  }, [])
  
  return (
    <div className='foodcontainer'>
      <div className='subcontainer'>
        <div className="categories pb-4 d-flex justify-content-between gap-3 overflow-auto">
          {
            types.map((type) => (
              <button className={`typebtn ${currentType.id === type.id ? "clicked" : ""}`} key={type.id} onClick={() => setType({...type})}>{type.type}</button>
          ))
          }
        </div>
        <div className='food'>
            <Category type={currentType.type} id={currentType.id}/>
        </div>
      </div>
    </div>
  )
}
