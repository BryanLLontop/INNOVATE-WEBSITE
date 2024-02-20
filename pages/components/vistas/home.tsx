"use client"
import React, {useState, useEffect} from 'react'
export default function CHome(props:any) {
   const [dataContent, setDataContent] = useState([]);
   useEffect(() => {
      fetch('../../../api/db.json')
            .then(response => response.json())
            .then(json => {
               const filteredData = json.pgcontent.filter((item: any) => item.categoria === 'home');
               setDataContent(filteredData);
            })
            .catch(error => console.error('Error al obtener datos:', error));
   }, []);
   
      return(<>
      
      {dataContent.map((item: any) => (
         <div className="text-center border-bottom" key={item.id}>
         <h1 className="display-4 fw-bold">{item.titulo}</h1>
         <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{item.descripcion}</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <a type="button" className="btn btn-outline-danger btn-lg px-4" href="./contactanos">Contáctanos</a>
            </div>
         </div>
         <div className="overflow-hidden"  style={{ maxHeight: `40vh` }}>
            <div className="container px-5">
            <img src={item.imagen} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="auto" loading="lazy"/>
            </div>
         </div>
      </div>
      ))}
   </>);
}