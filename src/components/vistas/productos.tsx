"use client"
import React, {useState, useEffect} from 'react'
import CSharesocial from "../redes/share";
import Image from 'next/image'
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

         <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-5 py-4">

               <div className="col">
               <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('./images/products/producto1.png')` }}>
                  <div className="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-1">
                     <h3 className="pt-5 mt-5 mb-4 display-7 fw-bold">Implementación de ERP</h3>
                     <ul className="d-flex list-unstyled mt-auto">
                     <li className="me-auto">
                        <img src="./images/logowhite.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                     </li>
                     </ul>
                  </div>
               </div>
               </div>
               
               <div className="col">
               <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('./images/products/producto2.png')` }}>
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-7 fw-bold">Implementación de CRM</h3>
                  <ul className="d-flex list-unstyled mt-auto">
                     <li className="me-auto">
                        <img src="./images/logowhite.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
                     </li>   
                  </ul>
                  </div>
                  </div>
               </div>

               <div className="col">
               <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('./images/products/producto3.png')` }}>
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-7 fw-bold">Implementación de Business Intelligence</h3>
                  <ul className="d-flex list-unstyled mt-auto">
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