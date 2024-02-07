"use client"
import React, {useState, useEffect} from 'react'
import CSharesocial from "../redes/share";
import './footer.css'
import Image from 'next/image'
export default function CFooter2(props:any) {
    const predatainfo={slogan:'',direccion:'',correo:'',telefono:''};
    const [dataInfo, setDataInfo] = useState(predatainfo);
    const [dataMenu, setDataMenu] = useState([]);
    const menutmp=props.menu||'inicio';
    useEffect(() => {
        fetch("/datajson/info.json")
            .then(res => res.json())
            .then((datatmp:any) => {
                setDataInfo(datatmp)
            })
    }, [])
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
    return (
    <>
    <div className="container footer2">
        <div className="row" >
            <div className="col-sm-12 col-md-4 text-center">
                <a href="/" title="logo">                   
                    <img  src="/images/logo.png"  className="img-fluid" style={{ width: '40%', height: 'auto' }} />
                </a>
                <br/>
                <div className="slogan text-center textoslogan">
                    {dataInfo.slogan}
                </div>                
            </div>
            <div className="col-sm-12 col-md-4 menu">
                <div className="footerTitulo">
                    Enlaces
                </div>
                <ul>
                {
                        dataMenu.map((item:any,k:any)=>{
                            console.log(item);
                            return (
                                <li key={'menupie_'+k}>
                                <a href={item.href}><i className='bi bi-arrow-right-square-fill'></i> {item.titulo}</a>
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
                    <div className="col-md-12"><strong className='iconfooter'><i className='bi bi-pin-map-fill'></i></strong> {dataInfo.direccion}</div>
                    <div className="col-md-12"><strong className='iconfooter'><i className='bi bi-envelope-at-fill'></i></strong> {dataInfo.correo}</div>
                    <div className="col-md-12"><strong className='iconfooter'><i className='bi bi-telephone-forward-fill'></i></strong> {dataInfo.telefono}</div>
                </div>

                <div className="footerTitulo">
                    Redes Sociales
                </div>
                <CSharesocial titulo='' />
            </div>
        </div>
    </div>
    </>
    )
}