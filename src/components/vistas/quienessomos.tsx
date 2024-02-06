"use client"
import React, {useState, useEffect} from 'react'
import CSharesocial from "../redes/share";
import Image from 'next/image'
export default function CContent(props:any) {
   const [dataContent, setContent] = useState([]);
   const menutmp=props.menu||'quienessomos';
   useEffect(() => {
      fetch("/datajson/slider.json")
            .then(res => res.json())
            .then((datatmp:any) => {
               setContent(datatmp[menutmp])
            })
   }, [])
   
      return(<>
      <div className="container py-5 text-center">
         <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-11">
               <div className="row introduccion">
               <div className="col-sm-12 col-md-6">
                  <img src="./images/default/mision.png" alt="Misión" className="img-fluid mb-3" />
                  <h2 className="display-5 fw-bold text-body-emphasis">Misión</h2>
                  <div className="bg-primario mb-3" style={{ width: '10%', height: '3px' }}></div>
                  <p className="lead mb-4">Innovate es una empresa dedicada a la creación de soluciones tecnológicas para optimizar el uso de recursos en las empresas del sector público y privado.</p>
               </div>
               <div className="col-sm-12 col-md-6 border-left">
                  <img src="./images/default/vision.png" alt="Visión" className="img-fluid mb-3" />
                  <h2 className="display-5 fw-bold text-body-emphasis">Visión</h2>
                  <div className="bg-primario mb-3" style={{ width: '10%', height: '3px' }}></div>
                  <p className="lead mb-4">Innovate busca convertirse en una de las principales empresas de soluciones tecnológicas de software de nuestro país.</p>
               </div>
               </div>
            </div>
         </div>
   </div>
   </>);
}