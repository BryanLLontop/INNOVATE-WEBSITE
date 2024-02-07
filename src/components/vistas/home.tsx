"use client"
import React, {useState, useEffect} from 'react'
import CSharesocial from "../redes/share";
import Image from 'next/image'
export default function CHome(props:any) {
   const [dataHome, setHome] = useState([]);
   const menutmp=props.menu||'inicio';
   useEffect(() => {
      fetch("/datajson/slider.json")
            .then(res => res.json())
            .then((datatmp:any) => {
               setHome(datatmp[menutmp])
            })
   }, [])
   
      return(<>
      <div className="px-4 pt-5 my-3 text-center border-bottom">
         <h1 className="display-4 fw-bold">Innovate</h1>
         <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">En nuestra empresa, nos especializamos en consultoría empresarial e informática,
            así como en el desarrollo de software a medida. Nuestro enfoque incluye la rápida creación y personalización de sitios web receptivos, 
            utilizando herramientas de vanguardia para garantizar la mejor experiencia para nuestros clientes.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <a type="button" className="btn btn-outline-danger btn-lg px-4" href="./contactanos">Contactanos</a>
            </div>
         </div>
         <div className="overflow-hidden"  style={{ maxHeight: `40vh` }}>
            <div className="container px-5">
            <img src="./images/home.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
            </div>
         </div>
      </div>
   </>);
}