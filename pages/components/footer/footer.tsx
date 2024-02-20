"use client"
import React, {useState, useEffect} from 'react'
export default function CFooter(props:any) {
  const predatainfo = { derechos: '', telefono: '' };
  const [dataInfo, setDataInfo] = useState(predatainfo);
  useEffect(() => {
    fetch('../../../api/db.json')
      .then(res => res.json())
      .then(json => {
        const data = json.infoinnovate;
        setDataInfo(data);
      })
      .catch(error => console.error('Error al obtener datos:', error));
  }, []);

  let txtderechos = '';
  if (dataInfo && dataInfo[0] && dataInfo[0].derechos) {
    txtderechos = dataInfo[0].derechos;
  }
  
  return (
    <>
      <div className="fondotop">
        <div className="container">
          <div className="row">
            <div className="text-center text-md-start col-sm-12 col-md-6 txttop">
              &#169; {txtderechos}
            </div>
            <div className="text-center text-md-end col-sm-12 col-md-6 "></div>
          </div>
        </div>
      </div>
      <div>
        <a target="_blank" href={`https://api.whatsapp.com/send?phone=51954498176`} className="icon-footer-whatssap">
          <img src="./images/icon-whatsapp.png" className='img-fluid' alt="wsp"/>
        </a>
      </div>
    </>
  );
}
