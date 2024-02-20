"use client"
import React, {useState, useEffect} from 'react'
export default function CAnimacion(props:any) {
   const [dataSlider, setDataSlider] = useState([]);
   const menuSeleccionado = props.categoria || 'inicio';
   
   useEffect(() => {
      fetch('../../../api/db.json')
         .then(response => response.json())
         .then(json => {
            const sliderData = json.pgsliderinnov,
            data = sliderData.filter((item: any) => item.categoria === menuSeleccionado);
            setDataSlider(data);
         } )
         .catch(error => console.error('Error al obtener datos:', error));
   }, [menuSeleccionado]);


      return (
         <>    
            <Carousel fade>
               {dataSlider.map((item: any, key: any) => (
                     <Carousel.Item key={`imageslider_${key}`} interval={3000}>
                        <img src={item.imagen} className="d-block w-100" alt={`slider${item.texto}`} />
                        <Carousel.Caption>
                           <h1 className="textslider">{item.texto}</h1>
                           <p className="subtexslider">{item.subtexto}</p>
                        </Carousel.Caption>
                     </Carousel.Item>    
               ))}
            </Carousel>                       
         </>
   );

}
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
