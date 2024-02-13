"use client"
import React, {useState, useEffect} from 'react'
import CMenudetalle from './menudetalle';
export default function CMenu(props:any) {
   const [dataMenu, setDataMenu] = useState([]);
   const menutmp=props.menu||'inicio';
   useEffect(() => {
      fetch("/datajson/menu.json")
            .then(res => res.json())
            .then((data1:any) => {
               let datatmp: any = data1["data"].filter((item:any)=>{
                  return item.mostrar
            });
            setDataMenu(datatmp)
            })
   }, [])
   return(
   <>
   <div className="panel row navbar toolbar2 menutop">
      <div className="col">
         <nav className="navbar navbar-expand-lg bg-transparent menus-top no-padding-nav">
            <div className="container">
               <a className="navbar-brand" href="./"><img style={{ width: '100px', height: '60PX' }} className="img-icon-logo img-fluid" src="/images/logo.png" alt="innovate_cix"/></a>
               <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
                  <div className="hamburger-toggle">
                     <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                     </div>
                  </div>
               </button>
               <div className="collapse navbar-collapse" id="navbar-content">
                  <ul className="navbar-nav mr-auto mb-2 mb-lg-0 menu-items">
                  {
                        dataMenu.map((itemMenu:any,keyMenu:any)=>{
                           return (
                              <CMenudetalle {...itemMenu} key={'keymenu_'+keyMenu}/>                              
                           );
                        })
                  }                     
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   </div>    
   </>
   )
}