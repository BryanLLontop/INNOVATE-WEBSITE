"use client"
import React, {useState, useEffect} from 'react'
export default function Cproduct(props:any) {
   const [dataContent, setContent] = useState([]);
   const menutmp=props.menu||'productos';
   useEffect(() => {
      fetch("/datajson/slider.json")
            .then(res => res.json())
            .then((datatmp:any) => {
               setContent(datatmp[menutmp])
            })
   }, [])
   
   return(<>
      <div className="container px-4 py-5" style={{marginTop: '30px'}} id="custom-cards">
         <h2 className="pb-2 border-bottom">Nuestros Productos</h2>

         <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-5 py-4">

               <div className="col">
               <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('./images/products/producto1.png')` }}>
                  <div className="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-1">
                     <h3 className="pt-5 mt-4 mb-3 display-7 fw-bold" style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)' }}>Implementación de ERP</h3>
                     <ul className="d-flex list-unstyled mt-auto">
                     <p className="card-text" style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)' }}>La implementación de ERP es la integración de procesos empresariales en un sistema 
                     de software único. Ayuda a gestionar eficientemente recursos como finanzas, inventario y recursos humanos, 
                     optimizando operaciones y facilitando decisiones basadas en datos en tiempo real.</p>
                     <li className="me-auto">
                        <img src="./images/logowhite.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                     </li>
                     </ul>
                  </div>
               </div>
               </div>
               
               <div className="col">
               <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('./images/products/producto2.png')` }}>
                  <div className="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-1">
                  <h3 className="pt-5 mt-4 mb-3 display-7 fw-bold" style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)' }}>Implementación de CRM</h3>
                  <ul className="d-flex list-unstyled mt-auto">
                     <p className="card-text" style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)' }}>La Implementación de CRM (Customer Relationship Management) optimiza la gestión de relaciones con los clientes 
                  mediante software especializado. Mejora la satisfacción del cliente, 
                  impulsa las ventas y personaliza las experiencias para el crecimiento del negocio.</p>
                     
                     <li className="me-auto">
                        <img src="./images/logowhite.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
                     </li>   
                  </ul>
                  </div>
                  </div>
               </div>

               <div className="col">
               <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('./images/products/producto3.png')` }}>
                  <div className="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-1">
                  <h3 className="pt-5 mt-4 mb-3 display-7 fw-bold" style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)' }}>Implementación de BI</h3>
                  <ul className="d-flex list-unstyled mt-auto">
                  <p className="card-text" style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)' }}>La Implementación de Business Intelligence (BI) consiste en el uso de herramientas y procesos para analizar datos empresariales y convertirlos en información significativa. 
                  Permite tomar decisiones más informadas y estratégicas, identificar tendencias y oportunidades, y mejorar el rendimiento empresarial.</p>
                     <li className="me-auto">
                        <img src="./images/logowhite.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
                     </li>
                  </ul>
                  </div>
                  </div>
               </div>

               <div className="col">
               <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('./images/products/producto4.png')` }}>
                  <div className="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-1">
                  <h3 className="pt-5 mt-4 mb-3 display-7 fw-bold" style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)' }}>Inteligencia Artificial (IA)</h3>
                  <ul className="d-flex list-unstyled mt-auto">
                  <p className="card-text" style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)' }}>La Inteligencia Artificial (IA) se refiere a la capacidad de las máquinas para realizar tareas que normalmente requieren inteligencia 
                  humana. Utiliza algoritmos y modelos de aprendizaje para procesar datos, tomar decisiones, y resolver problemas de manera autónoma.</p>
                     
                     <li className="me-auto">
                        <img src="./images/logowhite.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
                     </li>
                  </ul>
                  </div>
                  </div>
               </div>
         </div>
      </div>

   </>);
}