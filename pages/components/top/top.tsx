"use client"
import React, {useState, useEffect} from 'react'
import CSharesocial from "../redes/share";
export default function CTop(props:any) {
  const [dataInfo, setDatos] = useState([]);
  useEffect(() => {
      fetch('../../../api/db.json')
          .then(response => response.json())
          .then(json => {
            const data = json.infoinnovate;
            setDatos(data);
          })
          .catch(error => console.error('Error al obtener datos:', error));
    }, []);
    
    return (
      <>
      <div className="fondotop">
      <div className="container-fluid">
        <div className="row">
          <div className="text-center text-md-start col-sm-12 col-md-6 txttop">
          {
                        dataInfo.map((data,index)=>{
                            return (
                            <a key={index} href={`mailto:${data.correo}`} style={{ color: 'inherit', textDecoration: 'none', padding: '5px', borderRadius: '5px' }}>
                            <i className="bi bi-envelope-at-fill"/> {data.correo}
                            </a>                              
                            );
                        })
                  }   

          </div>
          <div className="text-center text-md-end col-sm-12 col-md-6 txttop">
          <CSharesocial titulo='Siguenos: '/>
          </div>
        </div>
      </div>
      </div>
      </>
    )
  }