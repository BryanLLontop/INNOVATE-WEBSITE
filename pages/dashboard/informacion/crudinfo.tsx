import { Col, Row, Form, Card, Button, Image, Table, Modal } from "react-bootstrap";
import React, { Fragment, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CrudInfo = () => {
    const [datos, setDatos] = useState([]);
    const [lgShow, setLgShow] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);
    const [editItemId, setEditItemId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [formData, setFormData] = useState({
        id: '',
        telefono: '',
        direccion: '',
        correo: '',
        derechos: '',
        slogan:''

    });
    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };
    const filteredMenus = datos.filter((fila) =>
        (fila.direccion.toLowerCase().includes(searchTerm.toLowerCase()) || fila.slogan.toLowerCase().includes(searchTerm.toLowerCase())));

        useEffect(() => {
            fetch('/api/db.json')
                .then(response => response.json())
                .then(json => {
                    const data: [] = json.infoinnovate;
                    setDatos(data);
                })
                .catch(error => console.error('Error al obtener datos:', error));
        }, []);


    const handleEditClick = (id) => {
        setEditItemId(id);
        setLgShow(true);

        fetch(`http://localhost:3001/infoinnovate/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setFormData({
                    id: data.id,
                    telefono: data.telefono,
                    direccion: data.direccion,
                    correo: data.correo,
                    derechos:data.derechos,
                    slogan:data.slogan
                });
            })
            .catch((error) => {
                console.error('Error al obtener datos para editar:', error);
            });
    };

    const handleSaveClick = () => {
        if (editItemId) {
            fetch(`http://localhost:3001/infoinnovate/${editItemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Datos actualizados:', data);
                })
                .catch((error) => {
                    console.error('Error al actualizar datos:', error);
                });

            setEditItemId(null);
        } else {
            fetch('http://localhost:3001/infoinnovate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Datos guardados:', data);
                })
                .catch((error) => {
                    console.error('Error al guardar datos:', error);
                });
        }
    };

    const handleDeleteClick = (id) => {
        setIdToDelete(id);

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "¿Seguro de querer eliminar?",
            text: "Si elimina, no se puede deshacer los cambios",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Operación Existosa!",
                    text: "Su archivo ha sido eliminado.",
                    icon: "success"
                });
                fetch(`http://localhost:3001/infoinnovate/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Datos guardados:', data);
                        fetch('http://localhost:3001/infoinnovate')
                            .then((response) => response.json())
                            .then((menusData) => {
                                setDatos(menusData);
                            })
                            .catch((error) => {
                                console.error('Error al actualizar menus:', error);
                            });
                    })
                    .catch((error) => {
                        console.error('Error al guardar datos:', error);
                    });
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Operación cancelada",
                    text: "Archivo aún conservado",
                    icon: "error"
                });
            }
        });

    };

    return (
        <>
            <br />
            <Row className="mb-8 m-1">
                <Col xl={12} lg={12} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div className="mb-4 mb-lg-0">
                                <br />
                                <Table hover responsive className="scroll text-nowrap">
                                    <thead >
                                        <tr className='table-secondary'>
                                            <th scope="col">Telefono</th>
                                            <th scope="col">Direccion</th>
                                            <th scope="col">Correo</th>
                                            <th scope="col">Derechos</th>
                                            <th scope="col">Slogan</th>
                                            <th scope='col'>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredMenus.map((fila, index) => (
                                            <tr key={fila.id}>
                                                <td>{fila.telefono}</td>
                                                <td>{fila.direccion}</td>
                                                <td>{fila.correo}</td>
                                                <td>{fila.derechos}</td>
                                                <td>{fila.slogan}</td>
                                                <td>
                                                    <Button onClick={() => handleEditClick(fila.id)} >  <i className="fe fe-edit fa-lg text-light"></i>   </Button>{' '}
                                                    <Button onClick={() => handleDeleteClick(fila.id)} className='btn-danger'><i className="fe fe-trash fa-lg"></i></Button>{' '}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <Fragment>
                <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            <h4 ><strong>MANTENIMIENTO:</strong> Info Innovate</h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col xl={12} lg={12} md={12} xs={12} className='p-2'>
                            <div>
                                <Form>
                                    <Row className="mb-3">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <input type="text" className="form-control" placeholder="Id" value={formData.telefono} onChange={(e) => handleInputChange('telefono', e.target.value)} />
                                        </div>
                                    </Row>

                                    <Row className='mb-3'>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <input type="text" className="form-control" placeholder="Nombre" value={formData.direccion} onChange={(e) => handleInputChange('direccion', e.target.value)} />
                                        </div>
                                    </Row>

                                    <Row className='mb-3'>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <input type="text" className="form-control" placeholder="Título" value={formData.correo} onChange={(e) => handleInputChange('correo', e.target.value)} />
                                        </div>
                                    </Row>

                                    <Row className="mb-3">
                                        <div className='col-md-12 col-12 text-center'>
                                        <input type="text" className="form-control" placeholder="Texto" value={formData.derechos} onChange={(e) => handleInputChange('derechos', e.target.value)} />
                                        </div>
                                    </Row>

                                    <Row className="mb-3">
                                        <div className="col-md-12 col-12">
                                            <input className="form-control" type="text" placeholder="Slogan" value={formData.slogan} onChange={(e) => handleInputChange('slogan', e.target.value)} />
                                        </div>
                                    </Row>

                                    <Row className="mb-3 text-end">

                                        <Col md={12} xs={12}>
                                            <Button className="btn btn-primary" type="submit" onClick={() => handleSaveClick()}>GUARDAR</Button>
                                            &nbsp;
                                            <Button className="btn btn-primary" type="reset" >LIMPIAR</Button>
                                        </Col>
                                    </Row>

                                </Form>
                            </div>

                        </Col>
                    </Modal.Body>

                </Modal>
            </Fragment>

        </>
    )
}

export default CrudInfo