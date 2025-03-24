import React, { useEffect, useState } from 'react'
import CardBody from './CardBody'
import './css/Card1.css'

export default function Card2(props) {
  const [src, setSrc] = useState('./logo.png')

  useEffect(()=>{
      var url = props.title?.replace(' ', '+');
      console.log("url text" + url);
      fetch(`https://pixabay.com/api/?key=49498195-296ac8a69e021d7b876be2e6e&q=${url}&image_type=photo` , {
          method: 'GET'
      })
      .then(res => res.json())
      .then(data => setSrc(data.hits[0].webformatURL))
      .catch(error => console.error("Error Fetching Products: " + error.message))
  }, [props.title])
  return (
    <div className='d-flex card2'  key={props.id}>
        <div className="image">
            <img height='90' width='90' src={src} alt={props.title}/>
        </div>
        <CardBody {...props}/>
    </div>
  )
}
