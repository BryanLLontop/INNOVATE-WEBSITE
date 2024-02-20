import Link from 'next/link';
import DefaultDashboardLayout from '../../layouts/DefaultDashboardLayout'
import { Col, Row} from "react-bootstrap";
import React, { Fragment, useEffect, useState } from 'react';
import GBbanner from './bannergb/crudbanner';
import GBinfo from './bannergb/infobanner';

const Slider = () => { // Cambia el nombre de la función a "Slider" con mayúscula inicial
    const [seccionActiva, setSeccionActiva] = useState('home');

    const ocultarMantenimiento = (seccion) => {
        setSeccionActiva(seccion);
    };

    return (
        <>
            <DefaultDashboardLayout>
                <Row className="align-items-center">
                    <Col xl={12} lg={12} md={12} xs={12}>
                        <div className="bg-white rounded-bottom smooth-shadow-sm ">
                            <div className="d-flex align-items-center justify-content-between pt-4 pb-1 px-4">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1">
                                        <h3 className="mb-3 text-secondary">BANNER PRINCIPAL DE INNOVATE</h3>
                                        <p>En el siguiente formulario podrás visualizar tus cambios del banner principal, así como también podrás editar sus datos.</p>
                                    </div>
                                </div>
                                
                            </div>

                            <ul className="nav nav-lt-tab px-4" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <Link className={`nav-link ${seccionActiva === 'home' ? 'active' : ''}`}
                                        href="#" onClick={() => ocultarMantenimiento('home')} >
                                        VISTA PREVIA
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${seccionActiva === 'paginas' ? 'active' : ''}`}
                                        href="#" onClick={() => ocultarMantenimiento('paginas')} >
                                        MANTENIMIENTO
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
                    {seccionActiva === 'home' && <GBinfo />}
                    {seccionActiva === 'paginas' && <GBbanner />}
                </Row>
            </DefaultDashboardLayout>
        </>
    )
}

export default Slider