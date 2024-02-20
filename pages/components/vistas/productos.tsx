"use client"
import React, {useState, useEffect} from 'react'
export default function Cproduct(props:any) {
   const [dataMenu, setDataMenu] = useState([]);
   useEffect(() => {
      fetch('../../../api/db.json')
         .then(response => response.json())
         .then(json => {
               const data = json.pgproductos;
                  setDataMenu(data);
               
         })
         .catch(error => console.error('Error al obtener datos:', error));
   }, []);

   return(<>
      <div className="container px-4 py-5" id="custom-cards">
         <h2 className="pb-2 border-bottom">Nuestros Productos</h2>
         <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-5 py-4">
         {dataMenu.map((producto: any) => (
               <div className="col" key={producto.id}>
                  <div className="cardcont card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${producto.img})` }}>
                  <div className="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-1">
                     <h3 className="pt-5 mt-4 mb-3 display-7 fw-bold" style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)', color:'rgb(255, 255, 255)'}}>{producto.titulo}</h3>
                     <ul className="d-flex list-unstyled mt-auto">
                        <p className="card-text" style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)' }}>{producto.descripcion}</p>
                     </ul>
                  </div>
               </div>
               </div>
         ))}
         </div>
      </div>

   </>);
}