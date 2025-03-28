import React, { useEffect, useState } from 'react'
import './css/Card1.css'
import CardBody from './CardBody'

export default function Card1(props) {
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
    <div className='bestCard' key={props.id}>
        <span>
            <img width="235px" height="125px" src={src} alt={props.title}/>
        </span>
        <CardBody {...props}/>
    </div>
  )
}
