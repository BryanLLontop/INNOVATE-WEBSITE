"use client"
import React, {useState, useEffect} from 'react'
import CSharesocial from "../redes/share";
import Image from 'next/image'
export default function CServicios(props:any) {
   const [dataContent, setContent] = useState([]);
   const menutmp=props.menu||'servicios';
   useEffect(() => {
      fetch("/datajson/slider.json")
            .then(res => res.json())
            .then((datatmp:any) => {
               setContent(datatmp[menutmp])
            })
   }, [])

      return(<>
      <div className="container px-4 py-5" style={{marginTop: '30px'}} id="custom-cards">
      <h2 className="pb-2 border-bottom">Nuestros Servicios</h2>

      <div className="row row-cols-1 align-items-stretch g-4 py-4">

            <div className="col">
            <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: '#d02024' }}>
               <div className="d-flex flex-column h-100 p-5 pb-5 text-white text-shadow-1">
               <div className="row justify-content-md-center">
               <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center">
                  <img
                     src="./images/services/servicio1.png"
                     className="img-fluid"
                     style={{ maxWidth: '60%', height: 'auto' }}
                     alt="Servicio 1"
                  />
               </div>
               <div className="col-sm-12 col-md-8 text-left">
                  <h2 className="negrita">Servicios de Consultoría Empresarial e Informática</h2>
                  <p className="color-claro text-justify">
                     Innovate realiza el diagnóstico de la actualidad de su empresa, luego basado en nuestra experiencia en el sector y en el uso de las tecnologías de información, proponemos rediseños a los procesos, adquisiciones de tencología y desarrollos de software que brinden a su negocio las herramientas tecnológicas que aseguren el logro de sus metas.
                  </p>
               </div>
               </div>
               </div>
            </div>
            </div>

            <div className="col">
            <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: '#d02024' }}>
               <div className="d-flex flex-column h-100 p-5 pb-5 text-white text-shadow-1">
               <div className="row justify-content-md-center">
               
               <div className="col-sm-12 col-md-8 text-left">
                  <h2 className="negrita">Servicios de Desarrollo de Software a la medida</h2>
                  <p className="color-claro text-justify">
                     Innovate se caracteriza por personalizar nuestras aplicaciones de software de acuerdo a las necesidades y expectativas del cliente. Contamos con amplia experiencia en el desarrollo de aplicaciones para el sector comercial, educativo, salud, gastronómico, hotelería, de servicios, productivo, entre otros. Nuestro personal analizará la situación actual de su empresa para lograr un diagnóstico situacional, luego de lo cual formulará propuestas para mejorar las cuales serán validadas por usted, y finalmente adecuar nuestra solución de software a su nuevo modelo de negocio, logrando su empresa el máximo rendimiento.
                  </p>
               </div>
               <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center">
                  <img
                     src="./images/services/servicio2.png"
                     className="img-fluid"
                     style={{ maxWidth: '60%', height: 'auto' }}
                     alt="Servicio 2"
                  />
               </div>
               </div>
               </div>
            </div>
            </div>

            <div className="col">
            <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: '#d02024' }}>
               <div className="d-flex flex-column h-100 p-5 pb-5 text-white text-shadow-1">
               <div className="row justify-content-md-center">
               <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center">
                  <img
                     src="./images/services/servicio3.png"
                     className="img-fluid"
                     style={{ maxWidth: '60%', height: 'auto' }}
                     alt="Servicio 3"
                  />
               </div>
               <div className="col-sm-12 col-md-8 text-left">
                  <h2 className="negrita">Servicio de Fábrica de Software</h2>
                  <p className="color-claro text-justify">
                  Nuestra Fábrica de Software es el núcleo donde la innovación cobra vida. Desarrollamos soluciones a medida que se adaptan a las necesidades únicas de tu empresa. Con un equipo altamente calificado de ingenieros y desarrolladores, trabajamos en colaboración contigo para transformar tus ideas en soluciones tecnológicas robustas y eficientes.
                  </p>
               </div>
               </div>
               </div>
            </div>
            </div>
            
      </div>
   </div>   

      
   
   </>);
}