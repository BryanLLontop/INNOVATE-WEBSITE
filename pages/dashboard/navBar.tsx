import DefaultDashboardLayout from '../../layouts/DefaultDashboardLayout'
import { Col, Row, Form, Card, Button, Image, Table, Modal } from "react-bootstrap";
import React, { Fragment, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import CMenudetalle from '../components/menu/menudetalle';

const NavBar = () => {
    const [datos, setDatos] = useState([]);
    const [lgShow, setLgShow] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);
    const [editItemId, setEditItemId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selMenu, setSelMenu] = useState('informacion');
    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        href: '',
        tipo: '',
        mostrar: ''
    });
    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };
    const filteredMenus = datos.filter((fila) =>
        (fila.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || fila.href.toLowerCase().includes(searchTerm.toLowerCase())));

    useEffect(() => {
            fetch('/api/db.json')
                .then(response => response.json())
                .then(json => {
                    const data: [] = json.pgmenuinnovate;
                    setDatos(data);
                })
                .catch(error => console.error('Error al obtener datos:', error));
        }, []);




    const handleEditClick = (id) => {
        setEditItemId(id);
        setLgShow(true);

        fetch(`http://localhost:3001/pgmenuinnovate/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setFormData({
                    id: data.id,
                    titulo: data.titulo,
                    href: data.href,
                    tipo: data.tipo,
                    mostrar: data.mostrar
                });
            })
            .catch((error) => {
                console.error('Error al obtener datos para editar:', error);
            });
    };

    const handleSaveClick = () => {
        if (editItemId) {
            fetch(`http://localhost:3001/pgmenuinnovate/${editItemId}`, {
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
            fetch('http://localhost:3001/pgmenuinnovate', {
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
                fetch(`http://localhost:3001/pgmenuinnovate/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Datos guardados:', data);
                        fetch('http://localhost:3001/pgmenuinnovate')
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

    const handleClearText = () => {
        setFormData({
            id: '',
            titulo: '',
            href: '',
            tipo: '',
            mostrar: ''
        });
    }
    return (
        <>
            <DefaultDashboardLayout>
                <br />
                <Row className="mb-5 m-1">
                    <Col xl={12} lg={12} md={12} xs={12}>
                        <Card>
                            <Card.Header className=' fw-bold'>VISTA PREVIA DEL NAVBAR</Card.Header>
                            <Card.Body>
                            <div className="navbar">
                                <div className="col" >
                                    <nav className="navbar navbar-expand-lg bg-transparent" style={{ padding:'0px' }}>
                                        <div className="container">
                                            <a className="navbar-brand" href="./">
                                                {datos.map((item: any) => {
                                                    if (item.titulo === 'Logo') {
                                                    return <img className="img-icon-logo img-fluid" key={item.id} src={item.href} alt={item.texto} style={{ width: '100px', height: '60px' }} />;
                                                    }
                                                    return null;
                                                })}
                                            </a>
                                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
                                            <div className="hamburger-toggle">
                                                <div className="hamburger">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbar-content">
                                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0 menu-items">
                                            {
                                                    datos.map((itemMenu:any,keyMenu:any)=>{
                                                    return (
                                                        <CMenudetalle {...itemMenu} key={'keymenu_'+keyMenu}/>                              
                                                    );
                                                    })
                                            }                     
                                            </ul>
                                        </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>    
                                

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <Row className="mb-8 m-1">
                    <Col xl={12} lg={12} md={12} xs={12}>
                        <Card>
                            <Card.Header>
                                <div className='row text-end'>
                                    <div className='col-md-8 col-lg-8 col-xs-8'>
                                        &nbsp;
                                    </div>
                                    <div className='col-md-4 col-lg-4 col-xs-4 '>
                                        <input type='search' placeholder='Nueva busqueda' className='form-control' onChange={(event) => setSearchTerm(event.target.value)}></input>
                                    </div>

                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="mb-4 mb-lg-0">
                                    <Table hover responsive className="scroll text-nowrap">
                                        <thead >
                                            <tr className='table-light' >
                                                <th scope="col">Id</th>
                                                <th scope="col">Ruta</th>
                                                <th scope="col">Titulo</th>
                                                <th scope='col'>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredMenus.map((fila, index) => (
                                                <tr key={fila.id}>
                                                    <td>{fila.id}</td>
                                                    <td>{fila.href}</td>
                                                    <td>{fila.titulo}</td>
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
                                <h4 ><strong>MANTENIMIENTO: </strong> NavBar</h4>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Col xl={12} lg={12} md={12} xs={12} className='p-2'>
                                <div>
                                    <Form>
                                        <Row className="mb-3">
                                            <div className="col-sm-6 col-lg-6">
                                                <input type="text" className="form-control" placeholder="Id" value={formData.id} onChange={(e) => handleInputChange('id', e.target.value)} />
                                            </div>
                                            {formData.titulo === 'Logo' ? (
                                                <div className="col-md-6 col-6">
                                                    <input type="text" className="form-control" placeholder="Texto" value={formData.titulo} onChange={(e) => handleInputChange('titulo', e.target.value)} disabled />
                                                </div>
                                            ) : (
                                                <div className="col-md-6 col-6">
                                                    <input type="text" className="form-control" placeholder="Texto" value={formData.titulo} onChange={(e) => handleInputChange('titulo', e.target.value)} />
                                                </div>
                                            )}
                                        </Row>
                                        <Row className="mb-3">
                                            <div className="col-md-12 col-12">
                                                <input type="text" className="form-control" placeholder="Ruta" value={formData.href} onChange={(e) => handleInputChange('href', e.target.value)} />
                                            </div>
                                        </Row>

                                        <Row className="mb-3 text-end">
                                            <Col md={12} xs={12}>
                                                <Button className="btn btn-primary" type="submit" onClick={() => handleSaveClick()}>GUARDAR</Button>
                                                &nbsp;
                                                <Button className="btn btn-primary" type="reset" onClick={() => handleClearText()}>LIMPIAR</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>

                            </Col>
                        </Modal.Body>

                    </Modal>
                </Fragment>
            </DefaultDashboardLayout>
        </>
    )
}

export default NavBar