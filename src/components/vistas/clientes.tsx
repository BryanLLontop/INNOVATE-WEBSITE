"use client"
import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // Activar el autoplay
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            
            ]
        };
    return (
        <>  
            <div className="container text-center px-4 py-5">
                <h1 className="display-4 fw-bold ">Nuestros Clientes</h1>
                <div className=" auspiciadores1">
                        <Slider {...settings}>
                            {dataClientes.map((cliente: any, index) => (
                                <div className='zoom-effect' key={index}>
                                    <img alt={cliente.nombre} src={cliente.href} className="img-cliente" width="260" height="auto" />
                                </div> 
                            ))}
                        </Slider>
                    </div>
            </div>
        </>
    );
    }