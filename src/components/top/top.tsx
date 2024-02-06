"use client"
import React, {useState, useEffect} from 'react'
import CSharesocial from "../redes/share";
export default function CTop(props:any) {
    const predatainfo={telefono:''}
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
            Contactanos : {dataInfo.telefono}
          </div>
          <div className="text-center text-md-end col-sm-12 col-md-6 ">
          <CSharesocial titulo='Siguenos: '/>
          </div>
        </div>
      </div>
      </div>
      </>
    )
  }