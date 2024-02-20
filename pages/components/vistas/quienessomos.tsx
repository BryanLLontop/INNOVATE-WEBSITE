"use client"
import React, {useState, useEffect} from 'react'
export default function CQuienessomos(props:any) {
   const [dataContent, setDataContent] = useState([]);
   useEffect(() => {
      fetch('../../../api/db.json')
            .then(response => response.json())
            .then(json => {
               const filteredData = json.pgcontent.filter((item: any) => item.categoria === 'quienessomos');
               setDataContent(filteredData);
            })
            .catch(error => console.error('Error al obtener datos:', error));
   }, []);
   
      return(<>
      <div className="container py-5 text-center">
         <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-11">
               
               <div className="row introduccion">
               {dataContent.map((item: any) => (
                  <div  className="col-sm-12 col-md-6"  key={item.id}>
                     <img src={item.imagen} alt={item.titulo} className="img-fluid mb-3" />
                     <h2 className="display-5 fw-bold text-body-emphasis">{item.titulo}</h2>
                     <div className="bg-primario mb-3" style={{ width: '10%', height: '3px' }}></div>
                     <p className="lead mb-4">{item.descripcion}</p>
                  </div>
               ))}
               </div>
               
            </div>
         </div>
   </div>
   </>);
}