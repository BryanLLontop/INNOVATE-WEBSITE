"use client"
import React, {useState, useEffect} from 'react'
export default function CAnimacion(props:any) {
   const [dataSlider, setDataSlider] = useState([]);
   const menutmp=props.menu||'inicio';
   useEffect(() => {
      fetch("/datajson/slider.json")
            .then(res => res.json())
            .then((datatmp:any) => {
               setDataSlider(datatmp[menutmp])
            })
   }, [])
   
      return (    
   <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-inner">
         {dataSlider.map((item: any, key: any) => (
            <div className={`carousel-item ${key === 0 ? 'active' : ''}`} key={`imageslider_${key}`}>
               <img src={item.imagen} className="d-block w-100" alt={`slider${item.texto}`} />
               <div className="carousel-caption d-md-block text-center">
               <h2 className="textoslider" style={{ fontSize: '3em', textShadow: '2px 2px 4px #000000' }}>{item.texto}</h2>
               <p className="textoslider" style={{ fontSize: '2em', textShadow: '2px 2px 4px #000000' }}>{item.subtexto}</p>
               </div>
            </div>
         ))}
         </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
         </button>
      </div>
   );


}