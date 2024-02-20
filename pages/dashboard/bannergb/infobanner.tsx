import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, Carousel, Col, Form, Modal, Row, Table } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const GBinfo = () => {
    const [datos, setDatos] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [lgShow, setLgShow] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        categoria: '',
        imagen: '',
        texto: '',
        subtexto: '',
    });

    const handleInputChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });
        setCategoriaSeleccionada(value);
    };

    useEffect(() => {
        fetch('http://localhost:3001/pgsliderinnov')
            .then(response => response.json())
            .then(data => setDatos(data))
            .catch(error => console.error('Error al obtener datos:', error));
    }, []);

    const filteredData = datos.filter((item) => item.categoria === categoriaSeleccionada);

    return (
        <>
            <Row className='mb-4'>
                <Col xl={12} lg={12} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <Card.Title as="h4">SELECCIONA UNA CATEGORIA</Card.Title>
                            <div className='col-md-6 col-6 mb-4'>
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example"
                                    value={formData.categoria} onChange={(e) => handleInputChange('categoria', e.target.value)}>
                                    <option value="" disabled>Seleccionar</option>
                                    {datos.filter((value, index, self) => index === self.findIndex((v) => v.categoria === value.categoria))
                                        .map((fila, index) => (
                                            <option key={index} value={fila.categoria}>{fila.categoria}</option>
                                        ))}
                                </select>
                            </div>
                            
                            {/* *******Contenido del corusel */}
                            

                            <Carousel fade>
                                {filteredData.map((item: any, key: any) => (
                                    <Carousel.Item key={`imageslider_${key}`} interval={1000}>
                                        <img src={item.imagen} className="d-block w-100" alt={`slider${item.texto}`} />
                                        <Carousel.Caption>
                                            <h1 className="textslider">{item.texto}</h1>
                                            <p className="subtexslider">{item.subtexto}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>    
                                ))}
                            </Carousel>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );

};

export default GBinfo