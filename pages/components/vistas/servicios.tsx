"use client"
import React, {useState, useEffect} from 'react'
interface Servicio {
   id: string;
   nombre: string;
   href: string;
   img: string;
   descripcion: string;
}
export default function CServicios(props:any) {
   const [dataMenu, setDataMenu] = useState([]);
   useEffect(() => {
      fetch('../../../api/db.json')
         .then(response => response.json())
         .then(json => {
               const data = json.pgservicios;
               setDataMenu(data);
         })
         .catch(error => console.error('Error al obtener datos:', error));
   }, []);

      return(<>
      <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Nuestros Servicios</h2>
      <div className="row row-cols-1 align-items-stretch g-4 py-4">
         {dataMenu.map((servicio: any) => (
               <div className="col" key={servicio.id}>
                  <div className="cardcont card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: '#b11d21' }}>
                     <div className="d-flex flex-column h-100 p-5 pb-5 text-white text-shadow-1">
                     <div className="row justify-content-md-center">
                     <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center">
                        <img
                           src={servicio.img}
                           className="img-fluid"
                           style={{ maxWidth: '60%', height: 'auto' }}
                           alt="Servicio 1"
                        />
                     </div>
                     <div className="col-sm-12 col-md-8 text-left">
                        <h2 className="negrita"  style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)', color:'rgb(255, 255, 255)'}}>{servicio.nombre}</h2>
                        <p className="color-claro text-justify">{servicio.descripcion}</p>
                     </div>
                     </div>
                     </div>
                  </div>
               </div>
         ))}
      </div>
   </div>   

      
   
   </>);
}