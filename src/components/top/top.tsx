"use client"
import React, {useState, useEffect} from 'react'
import CSharesocial from "../redes/share";
export default function CTop(props:any) {
    const predatainfo={correo:''}
    const [dataInfo, setDataInfo] = useState(predatainfo);
    const menutmp=props.menu||'inicio';
    useEffect(() => {
      fetch("/datajson/info.json")
            .then(res => res.json())
            .then((datatmp:any) => {
                setDataInfo(datatmp)
            })
    }, [])
    
    return (
      <>
      <div className="fondotop">
      <div className="container-fluid">
        <div className="row">
          <div className="text-center text-md-start col-sm-12 col-md-6 txttop">
          <a href={`mailto:${dataInfo.correo}`} style={{ color: 'inherit', textDecoration: 'none', padding: '5px', borderRadius: '5px' }}>
            <i className="bi bi-envelope-at-fill"/> {dataInfo.correo}
            </a>
            
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