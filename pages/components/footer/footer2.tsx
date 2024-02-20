"use client"
import React, {useState, useEffect} from 'react'
import CSharesocial from "../redes/share";
import Link from 'next/link';

export default function CFooter2(props:any) {
    const predatainfo={slogan:'',direccion:'',correo:'',telefono:'',logofooter:''};
    const [dataInfo, setDataInfo] = useState(predatainfo);
    const [dataMenu, setDataMenu] = useState([]);
    
    useEffect(() => {
        fetch('../../../api/db.json')
            .then(response => response.json())
            .then(json => {
                const data = json.infoinnovate;
                setDataInfo(data);
            })
            .catch(error => console.error('Error al obtener datos:', error));
        }, [])

    useEffect(() => {
        fetch('../../../api/db.json')
        .then(response => response.json())
        .then(json => {
            const data = json.pgmenuinnovate.filter((item:any)=>{
                return item.mostrar
            });
            setDataMenu(data);
        })
        .catch(error => console.error('Error al obtener datos:', error));
        }, [])

    const extractData = (key: string) => {
        return dataInfo && dataInfo[0] && dataInfo[0][key] ? dataInfo[0][key] : '';
    };

    const slogan = extractData('slogan');
    const direccion = extractData('direccion');
    const correo = extractData('correo');
    const telefono = extractData('telefono');
    const logofooter = extractData('logofooter');
    
    return (<>
    <div className="footer2">
    <div className="container ">
    <div className="row" >
        <div className="col-sm-12 col-md-4 my-4 text-center">
            <Link href="/" passHref>
            <img src={logofooter} className="img-fluid" style={{ width: '40%', height: 'auto' }} />
            </Link>
            <br/>
            <div className="slogan text-center textoslogan">
                {slogan}
            </div>                
        </div>
        <div className="col-sm-12 col-md-4 menu">
            <div className="footerTitulo">
                Enlaces
            </div>
            <ul>
            {
                    dataMenu.map((item:any,k:any)=>{
                        
                        return (
                            <li key={'menupie_'+k}>
                            <a className="footer2a" href={item.href}><i className='bi bi-arrow-right-square-fill'></i> {item.titulo}</a>
                            </li>
                        );
                    })   
            }
            </ul>
            
        </div>
        <div className="col-sm-12 col-md-4 footer-redes">
            <div className="footerTitulo">
                Ubícanos
            </div>
            <div className='row'>
                <div className="col-md-12"><strong className='iconfooter'><i className='bi bi-pin-map-fill'></i></strong> {direccion}</div>
                <div className="col-md-12"><strong className='iconfooter'><i className='bi bi-envelope-at-fill'></i></strong> {correo}</div>
                <div className="col-md-12"><strong className='iconfooter'><i className='bi bi-telephone-forward-fill'></i></strong> {telefono}</div>
            </div>

            <div className="footerTitulo">
                Redes Sociales
            </div>
            <CSharesocial titulo='' />
        </div>
    </div>
    </div>
</div>
</>
    )
}