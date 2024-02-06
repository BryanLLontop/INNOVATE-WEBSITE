"use client"
import React, {useState, useEffect} from 'react'
import CIMG from '../tools/image';
import Image from 'next/image'
export default function CVistadetalle(props:any) {
    const [dataSubMenu, setDataSubMenu] = useState([]);
    const menutmp=props.menu||'inicio';
    useEffect(() => {
        fetch(props.data)
            .then(res => res.json())
            .then((datatmp:any) => {
                setDataSubMenu(datatmp["data"])
            })
    }, [])


   // console.log('CVistadetalle',props);
    return (
        <>
        <div className="col-12 col-sm-6 col-md-3 py-4">
            <h5>{props.titulo}</h5>
            <div className="list-group">
            {dataSubMenu.map((item: any, index: number) => (
                <a key={index} className="list-group-item" href={item.href}>
                {item.nombre}
                </a>
            ))}
            </div>
        </div>
        
        <div className="col-12 col-sm-6 col-md-3 py-4">
            <h5>{props.titulodestacado}</h5>
            <div className="card">
            <img src={props.imgdestacados} style={{ width: '100%', height: 'auto' }} />
            <div className="card-body">
                <p className="card-text">{props.textodestacado}</p>
            </div>
            </div>
        </div>
        
        </>
    );
    }