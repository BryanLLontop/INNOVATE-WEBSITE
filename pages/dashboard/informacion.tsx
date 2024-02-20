import Link from 'next/link';
import DefaultDashboardLayout from '../../layouts/DefaultDashboardLayout'
import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import CrudCliente from './informacion/crudcliente';
import CrudProducto from './informacion/crudproducto';
import CrudServicio from './informacion/crudservicio';
import CrudInfo from './informacion/crudinfo';
const Servicios1 = () => {
    const [seccionActiva, setSeccionActiva] = useState('info');

    const ocultarMantenimiento = (seccion) => {
        setSeccionActiva(seccion);
    };

    return (
        <>
            <DefaultDashboardLayout>
                <Row className="align-items-center">
                    <Col xl={12} lg={12} md={12} xs={12}>

                        <div className="bg-white rounded-bottom smooth-shadow-sm ">
                            <div className="d-flex align-items-center justify-content-between pt-4 pb-2 px-4">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1">
                                        <h3 className="mb-2 text-secondary">PAGINA INFORMACION</h3>
                                        <p>En el siguiente formulario podrás visualizar tu informacion y podrás editar sus datos.</p>
                                    </div>
                                </div>
                            </div>

                            <ul className="nav nav-lt-tab px-4" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${seccionActiva === 'info' ? 'active' : ''}`}
                                        href="#"
                                        onClick={() => ocultarMantenimiento('info')}
                                    >
                                        INFO
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${seccionActiva === 'productos' ? 'active' : ''}`}
                                        href="#"
                                        onClick={() => ocultarMantenimiento('productos')}
                                    >
                                        PRODUCTOS
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${seccionActiva === 'servicios' ? 'active' : ''}`}
                                        href="#"
                                        onClick={() => ocultarMantenimiento('servicios')}
                                    >
                                        SERVICIOS
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${seccionActiva === 'clientes' ? 'active' : ''}`}
                                        href="#"
                                        onClick={() => ocultarMantenimiento('clientes')}
                                    >
                                        CLIENTES
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" href="#">
                                        Otros
                                    </Link>
                                </li>

                            </ul>


                        </div>
                    </Col>
                </Row>
                <br />
                <Row className="mb-8 m-1">
                {seccionActiva === 'info' && <CrudInfo />}
                    {seccionActiva === 'productos' && <CrudProducto />}
                    {seccionActiva === 'servicios' && <CrudServicio />}
                    {seccionActiva === 'clientes' && <CrudCliente />}
                </Row>


            </DefaultDashboardLayout>
        </>
    )
}

export default Servicios1