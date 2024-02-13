"use client"
import React, {useState, useEffect} from 'react'
import CSharesocial from "../redes/share";
import CIMG from '../tools/image';
export default function CFooter(props:any) {
   const predatainfo={derechos:'',telefono:''}
   const [dataInfo, setDataInfo] = useState(predatainfo);
   const menutmp=props.menu||'inicio';
   useEffect(() => {
      fetch("/datajson/info.json")
            .then(res => res.json())
            .then((datatmp:any) => {
                setDataInfo(datatmp)
            })
    }, []) 
      let txtderechos=dataInfo["derechos"]||'';

    return (
      <>
      <div className="fondotop">
      <div className="container">
        <div className="row">
          <div className="text-center text-md-start col-sm-12 col-md-6 txttop">
          &#169; {txtderechos}
          </div>
          <div className="text-center text-md-end col-sm-12 col-md-6 ">
          </div>
        </div>
      </div>
      </div>
      <div >
        <a target="_blank" href={`https://api.whatsapp.com/send?phone=51954498176`} className="icon-footer-whatssap">
          <img src="./images/icon-whatsapp.png" className='img-fluid' alt="wsp"/></a>
      </div>
      </>
    )
  }