"use client"
import React, {useState, useEffect} from 'react'

export default function CClientes(props: any) {
    const [dataClientes, setClientes] = useState([]); // Inicializar dataClientes como un array vacío
    const clientestmp = props.cliente || 'data';
    useEffect(() => {
        fetch("/datajson/clientes.json")
            .then(res => res.json())
            .then((datatmp: any) => {
                setClientes(datatmp[clientestmp])
            })
    }, []);

    return (
        <>
            <div className="container text-center px-4 py-5" id="custom-cards">
                <h1 className="display-4 fw-bold py-4">Nuestros Clientes</h1>
                <div className="row">
                    {dataClientes.map((cliente: any, index) => (
                        <div className="col-lg-3" key={index}>
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" role="img" aria-label={`Cliente: ${cliente.nombre}`} preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>{cliente.nombre}</title>
                                <rect width="100%" height="100%" fill="#ffffff"></rect>
                                <image href={cliente.href} width="140" height="140" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
    }