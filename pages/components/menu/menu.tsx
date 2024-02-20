"use client"
import React, {useState, useEffect} from 'react'
import CMenudetalle from './menudetalle';
export default function CMenu(props:any) {
   const [datos, setDatos] = useState([]);
   useEffect(() => {
   fetch('../../../api/db.json')
         .then(response => response.json())
         .then(json => {
            const data = json.pgmenuinnovate;
            setDatos(data);
         })
         .catch(error => console.error('Error al obtener datos:', error));
      }, []);

   useEffect(() => {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .then(() => {
               console.log('Bootstrap JavaScript loaded successfully.');
            })
            .catch((error) => {
               console.error('Error loading Bootstrap JavaScript:', error);
            });
      }, []);
      
   return(
   <>
   <div className="navbar">
      <div className="col">
         <nav className="navbar navbar-expand-lg bg-transparent" style={{ padding:'0px' }}>
            <div className="container">
                  <a className="navbar-brand" href="./">
                     {datos.map((item: any) => {
                        if (item.titulo === 'Logo') {
                           return <img className="img-icon-logo img-fluid" key={item.id} src={item.href} alt={item.titulo} style={{ width: '100px', height: '60px' }} />;
                           }
                        return null;
                     })}
                  </a>
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
                        datos.map((itemMenu:any,keyMenu:any)=>{
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
import 'bootstrap/dist/css/bootstrap.min.css';


